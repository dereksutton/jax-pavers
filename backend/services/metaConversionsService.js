/**
 * Meta Conversions API Service
 *
 * Sends server-side events to Meta (Facebook) for better tracking accuracy,
 * especially important after iOS 14.5+ privacy changes.
 *
 * Documentation: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

import crypto from 'crypto';

const META_API_VERSION = 'v21.0';
const META_GRAPH_URL = 'https://graph.facebook.com';

/**
 * Hash data using SHA-256 (required by Meta for user data)
 * @param {string} data - Data to hash
 * @returns {string|null} - Hashed data or null if empty
 */
function hashData(data) {
  if (!data || typeof data !== 'string') return null;

  // Normalize: lowercase and trim whitespace
  const normalized = data.toLowerCase().trim();
  if (!normalized) return null;

  return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Normalize and hash phone number
 * @param {string} phone - Phone number
 * @returns {string|null} - Hashed phone or null
 */
function hashPhone(phone) {
  if (!phone) return null;

  // Remove all non-numeric characters
  const digitsOnly = phone.replace(/\D/g, '');

  // Add US country code if not present (assuming US numbers)
  const normalized = digitsOnly.length === 10 ? `1${digitsOnly}` : digitsOnly;

  if (!normalized) return null;
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Parse address into components
 * @param {string} address - Full address string
 * @returns {Object} - Parsed address components
 */
function parseAddress(address) {
  if (!address) return {};

  // Basic parsing - this handles common formats like "123 Main St, Jacksonville, FL 32256"
  const parts = address.split(',').map(p => p.trim());

  const result = {};

  if (parts.length >= 1) {
    // First part is usually street address
    result.street = parts[0];
  }

  if (parts.length >= 2) {
    // Second part is usually city
    result.city = parts[1];
  }

  if (parts.length >= 3) {
    // Third part usually contains state and zip
    const stateZip = parts[2].trim();
    const stateZipMatch = stateZip.match(/^([A-Z]{2})\s*(\d{5}(?:-\d{4})?)?$/i);

    if (stateZipMatch) {
      result.state = stateZipMatch[1].toLowerCase();
      if (stateZipMatch[2]) {
        result.zip = stateZipMatch[2];
      }
    } else {
      // Try to extract just the state or zip
      const zipMatch = stateZip.match(/(\d{5})/);
      if (zipMatch) result.zip = zipMatch[1];

      const stateMatch = stateZip.match(/\b([A-Z]{2})\b/i);
      if (stateMatch) result.state = stateMatch[1].toLowerCase();
    }
  }

  return result;
}

/**
 * Build user data object for Conversions API
 * @param {Object} quoteData - Quote submission data
 * @param {Object} requestInfo - Request metadata (IP, user agent)
 * @returns {Object} - User data object with hashed values
 */
function buildUserData(quoteData, requestInfo) {
  const userData = {};

  // Email (hashed)
  if (quoteData.email) {
    userData.em = [hashData(quoteData.email)];
  }

  // Phone (hashed)
  if (quoteData.phone) {
    userData.ph = [hashPhone(quoteData.phone)];
  }

  // Name parsing
  if (quoteData.fullName) {
    const nameParts = quoteData.fullName.trim().split(/\s+/);
    if (nameParts.length >= 1) {
      userData.fn = [hashData(nameParts[0])]; // First name
    }
    if (nameParts.length >= 2) {
      userData.ln = [hashData(nameParts[nameParts.length - 1])]; // Last name
    }
  }

  // Address components (hashed)
  if (quoteData.address) {
    const addressParts = parseAddress(quoteData.address);

    if (addressParts.city) {
      userData.ct = [hashData(addressParts.city)];
    }
    if (addressParts.state) {
      userData.st = [hashData(addressParts.state)];
    }
    if (addressParts.zip) {
      userData.zp = [hashData(addressParts.zip)];
    }
  }

  // Country (default to US for Jacksonville business)
  userData.country = [hashData('us')];

  // Client IP address
  if (requestInfo.ipAddress) {
    // Handle forwarded IPs (take the first one)
    const ip = requestInfo.ipAddress.split(',')[0].trim();
    userData.client_ip_address = ip;
  }

  // User agent
  if (requestInfo.userAgent) {
    userData.client_user_agent = requestInfo.userAgent;
  }

  // Facebook click ID (fbc) - from URL parameter or cookie
  if (requestInfo.fbc) {
    userData.fbc = requestInfo.fbc;
  }

  // Facebook browser ID (fbp) - from cookie
  if (requestInfo.fbp) {
    userData.fbp = requestInfo.fbp;
  }

  return userData;
}

/**
 * Send event to Meta Conversions API
 * @param {string} eventName - Event name (e.g., 'Lead', 'Purchase')
 * @param {Object} eventData - Event-specific data
 * @param {Object} userData - User data object
 * @param {string} eventId - Unique event ID for deduplication
 * @returns {Promise<Object>} - API response
 */
async function sendEvent(eventName, eventData, userData, eventId) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn('Meta Conversions API not configured - skipping event');
    return { success: false, error: 'Not configured' };
  }

  const url = `${META_GRAPH_URL}/${META_API_VERSION}/${pixelId}/events`;

  const eventPayload = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId, // For deduplication with browser pixel
    action_source: 'website',
    event_source_url: eventData.sourceUrl || process.env.WEBSITE_URL || 'https://jaxoutdoorspaces.com',
    user_data: userData,
  };

  // Add custom data if provided
  if (eventData.customData) {
    eventPayload.custom_data = eventData.customData;
  }

  const payload = {
    data: [eventPayload],
    // Test event code for debugging (remove in production)
    ...(process.env.META_TEST_EVENT_CODE && {
      test_event_code: process.env.META_TEST_EVENT_CODE
    }),
  };

  try {
    const response = await fetch(`${url}?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta Conversions API error:', result);
      return {
        success: false,
        error: result.error?.message || 'API request failed',
        details: result
      };
    }

    console.log('Meta Conversions API success:', {
      eventName,
      eventId,
      eventsReceived: result.events_received,
    });

    return {
      success: true,
      eventsReceived: result.events_received,
      fbTraceId: result.fbtrace_id,
    };

  } catch (error) {
    console.error('Meta Conversions API request failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Track a Lead event (quote form submission)
 * @param {Object} quoteData - Quote submission data
 * @param {Object} requestInfo - Request metadata
 * @returns {Promise<Object>} - API response
 */
async function trackLead(quoteData, requestInfo) {
  // Generate unique event ID for deduplication
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const userData = buildUserData(quoteData, requestInfo);

  const eventData = {
    sourceUrl: requestInfo.sourceUrl,
    customData: {
      content_name: 'Quote Request',
      content_category: quoteData.projectType || 'General',
      // Include non-PII custom data
      lead_type: 'consultation_request',
      project_type: quoteData.projectType || 'Not specified',
      budget_range: quoteData.budget || 'Not specified',
      timeline: quoteData.timeline || 'Not specified',
      how_heard: quoteData.howHeard || 'Not specified',
    },
  };

  const result = await sendEvent('Lead', eventData, userData, eventId);

  // Return the eventId for frontend deduplication
  return {
    ...result,
    eventId,
  };
}

/**
 * Track a Contact event (phone call click, etc.)
 * @param {Object} contactData - Contact event data
 * @param {Object} requestInfo - Request metadata
 * @returns {Promise<Object>} - API response
 */
async function trackContact(contactData, requestInfo) {
  const eventId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const userData = buildUserData(contactData, requestInfo);

  const eventData = {
    sourceUrl: requestInfo.sourceUrl,
    customData: {
      content_name: 'Contact Request',
      contact_method: contactData.method || 'form',
    },
  };

  return sendEvent('Contact', eventData, userData, eventId);
}

/**
 * Track a custom event
 * @param {string} eventName - Custom event name
 * @param {Object} eventData - Event data
 * @param {Object} userData - User data
 * @param {Object} requestInfo - Request metadata
 * @returns {Promise<Object>} - API response
 */
async function trackCustomEvent(eventName, eventData, userData, requestInfo) {
  const eventId = `${eventName.toLowerCase()}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const fullUserData = {
    ...userData,
    ...(requestInfo.ipAddress && { client_ip_address: requestInfo.ipAddress.split(',')[0].trim() }),
    ...(requestInfo.userAgent && { client_user_agent: requestInfo.userAgent }),
  };

  return sendEvent(eventName, eventData, fullUserData, eventId);
}

export default {
  trackLead,
  trackContact,
  trackCustomEvent,
  hashData,
  hashPhone,
};
