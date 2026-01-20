/**
 * Meta Conversions API Service
 *
 * Sends server-side events to Meta (Facebook) for better tracking accuracy,
 * especially important after iOS 14.5+ privacy changes.
 *
 * Documentation: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

import crypto from 'crypto';

// Use stable API version
const META_API_VERSION = 'v18.0';
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

  const parts = address.split(',').map(p => p.trim());
  const result = {};

  if (parts.length >= 1) {
    result.street = parts[0];
  }

  if (parts.length >= 2) {
    result.city = parts[1];
  }

  if (parts.length >= 3) {
    const stateZip = parts[2].trim();
    const stateZipMatch = stateZip.match(/^([A-Z]{2})\s*(\d{5}(?:-\d{4})?)?$/i);

    if (stateZipMatch) {
      result.state = stateZipMatch[1].toLowerCase();
      if (stateZipMatch[2]) {
        result.zip = stateZipMatch[2];
      }
    } else {
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
 * @param {Object} data - User/quote data
 * @param {Object} requestInfo - Request metadata (IP, user agent)
 * @returns {Object} - User data object with hashed values
 */
function buildUserData(data, requestInfo) {
  const userData = {};

  // Email (hashed)
  if (data.email) {
    userData.em = [hashData(data.email)];
  }

  // Phone (hashed)
  if (data.phone) {
    userData.ph = [hashPhone(data.phone)];
  }

  // Name parsing
  if (data.fullName) {
    const nameParts = data.fullName.trim().split(/\s+/);
    if (nameParts.length >= 1) {
      userData.fn = [hashData(nameParts[0])];
    }
    if (nameParts.length >= 2) {
      userData.ln = [hashData(nameParts[nameParts.length - 1])];
    }
  }

  // Address components (hashed)
  if (data.address) {
    const addressParts = parseAddress(data.address);

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

  // Country (default to US)
  userData.country = [hashData('us')];

  // Client IP address (required for server events)
  if (requestInfo.ipAddress) {
    const ip = requestInfo.ipAddress.split(',')[0].trim();
    // Remove IPv6 prefix if present
    userData.client_ip_address = ip.replace(/^::ffff:/, '');
  }

  // User agent (required for server events)
  if (requestInfo.userAgent) {
    userData.client_user_agent = requestInfo.userAgent;
  }

  // Facebook click ID (fbc) - improves attribution
  if (requestInfo.fbc) {
    userData.fbc = requestInfo.fbc;
  }

  // Facebook browser ID (fbp) - improves attribution
  if (requestInfo.fbp) {
    userData.fbp = requestInfo.fbp;
  }

  return userData;
}

/**
 * Log configuration status on startup
 */
function logConfigStatus() {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const testCode = process.env.META_TEST_EVENT_CODE;

  console.log('\n========== META CONVERSIONS API CONFIG ==========');
  console.log(`Pixel ID: ${pixelId ? pixelId : 'NOT SET'}`);
  console.log(`Access Token: ${accessToken ? `${accessToken.substring(0, 10)}...` : 'NOT SET'}`);
  console.log(`Token Format Valid: ${accessToken?.startsWith('EAA') ? 'YES' : 'NO - Should start with EAA'}`);
  console.log(`Test Event Code: ${testCode || 'NOT SET (production mode)'}`);
  console.log(`API Version: ${META_API_VERSION}`);
  console.log(`Website URL: ${process.env.WEBSITE_URL || 'https://jaxoutdoorspaces.com'}`);
  console.log('==================================================\n');
}

// Log config on module load
logConfigStatus();

/**
 * Send event to Meta Conversions API
 * @param {string} eventName - Event name (e.g., 'Lead', 'PageView')
 * @param {Object} eventData - Event-specific data
 * @param {Object} userData - User data object
 * @param {string} eventId - Unique event ID for deduplication
 * @returns {Promise<Object>} - API response
 */
async function sendEvent(eventName, eventData, userData, eventId) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  console.log('\n---------- CAPI EVENT START ----------');
  console.log(`Event: ${eventName}`);
  console.log(`Event ID: ${eventId}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);

  // Check configuration
  if (!pixelId) {
    console.error('ERROR: META_PIXEL_ID not set in environment variables');
    console.log('---------- CAPI EVENT END (FAILED) ----------\n');
    return { success: false, error: 'META_PIXEL_ID not configured' };
  }

  if (!accessToken) {
    console.error('ERROR: META_ACCESS_TOKEN not set in environment variables');
    console.log('---------- CAPI EVENT END (FAILED) ----------\n');
    return { success: false, error: 'META_ACCESS_TOKEN not configured' };
  }

  if (!accessToken.startsWith('EAA')) {
    console.error('ERROR: META_ACCESS_TOKEN appears invalid (should start with EAA)');
    console.log('---------- CAPI EVENT END (FAILED) ----------\n');
    return { success: false, error: 'Invalid access token format' };
  }

  const url = `${META_GRAPH_URL}/${META_API_VERSION}/${pixelId}/events`;
  console.log(`API URL: ${url}`);

  // Build event payload
  const eventTime = Math.floor(Date.now() / 1000);
  const eventSourceUrl = eventData.sourceUrl || process.env.WEBSITE_URL || 'https://jaxoutdoorspaces.com';

  const eventPayload = {
    event_name: eventName,
    event_time: eventTime,
    event_id: eventId,
    action_source: 'website',
    event_source_url: eventSourceUrl,
    user_data: userData,
  };

  // Add custom data if provided
  if (eventData.customData && Object.keys(eventData.customData).length > 0) {
    eventPayload.custom_data = eventData.customData;
  }

  const payload = {
    data: [eventPayload],
  };

  // Add test event code if configured
  if (testEventCode) {
    payload.test_event_code = testEventCode;
    console.log(`Test Event Code: ${testEventCode}`);
  }

  console.log('Payload:', JSON.stringify(payload, null, 2));

  try {
    console.log('Sending request to Meta...');

    const response = await fetch(`${url}?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`Response Status: ${response.status}`);
    console.log(`Response Body: ${responseText}`);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse response as JSON');
      result = { raw: responseText };
    }

    if (!response.ok) {
      console.error('META CAPI ERROR:', result);
      console.log('---------- CAPI EVENT END (FAILED) ----------\n');
      return {
        success: false,
        error: result.error?.message || `HTTP ${response.status}`,
        details: result,
        statusCode: response.status,
      };
    }

    console.log('SUCCESS: Event sent to Meta');
    console.log(`Events Received: ${result.events_received}`);
    console.log(`FB Trace ID: ${result.fbtrace_id}`);
    console.log('---------- CAPI EVENT END (SUCCESS) ----------\n');

    return {
      success: true,
      eventsReceived: result.events_received,
      fbTraceId: result.fbtrace_id,
      eventId,
    };

  } catch (error) {
    console.error('NETWORK ERROR:', error.message);
    console.error('Stack:', error.stack);
    console.log('---------- CAPI EVENT END (FAILED) ----------\n');
    return {
      success: false,
      error: error.message,
      networkError: true,
    };
  }
}

/**
 * Track a PageView event
 * @param {Object} requestInfo - Request metadata
 * @returns {Promise<Object>} - API response
 */
async function trackPageView(requestInfo) {
  const eventId = `pv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const userData = {
    client_ip_address: requestInfo.ipAddress?.split(',')[0].trim().replace(/^::ffff:/, ''),
    client_user_agent: requestInfo.userAgent,
  };

  if (requestInfo.fbc) userData.fbc = requestInfo.fbc;
  if (requestInfo.fbp) userData.fbp = requestInfo.fbp;

  const eventData = {
    sourceUrl: requestInfo.sourceUrl || process.env.WEBSITE_URL || 'https://jaxoutdoorspaces.com',
  };

  const result = await sendEvent('PageView', eventData, userData, eventId);
  return { ...result, eventId };
}

/**
 * Track a Lead event (quote form submission)
 * @param {Object} quoteData - Quote submission data
 * @param {Object} requestInfo - Request metadata
 * @returns {Promise<Object>} - API response
 */
async function trackLead(quoteData, requestInfo) {
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const userData = buildUserData(quoteData, requestInfo);

  const eventData = {
    sourceUrl: requestInfo.sourceUrl,
    customData: {
      content_name: 'Quote Request',
      content_category: quoteData.projectType || 'General',
      lead_type: 'consultation_request',
      project_type: quoteData.projectType || 'Not specified',
      budget_range: quoteData.budget || 'Not specified',
      timeline: quoteData.timeline || 'Not specified',
      how_heard: quoteData.howHeard || 'Not specified',
    },
  };

  const result = await sendEvent('Lead', eventData, userData, eventId);
  return { ...result, eventId };
}

/**
 * Track a Contact event
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

  const result = await sendEvent('Contact', eventData, userData, eventId);
  return { ...result, eventId };
}

/**
 * Send a test event to verify CAPI is working
 * @param {Object} requestInfo - Request metadata
 * @returns {Promise<Object>} - API response
 */
async function sendTestEvent(requestInfo = {}) {
  const eventId = `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const userData = {
    client_ip_address: requestInfo.ipAddress?.split(',')[0].trim().replace(/^::ffff:/, '') || '127.0.0.1',
    client_user_agent: requestInfo.userAgent || 'CAPI-Test-Agent',
  };

  const eventData = {
    sourceUrl: process.env.WEBSITE_URL || 'https://jaxoutdoorspaces.com',
    customData: {
      test: true,
      timestamp: new Date().toISOString(),
    },
  };

  console.log('\n*** SENDING TEST EVENT ***');
  const result = await sendEvent('PageView', eventData, userData, eventId);
  return { ...result, eventId };
}

/**
 * Get current configuration status
 * @returns {Object} - Configuration status
 */
function getConfigStatus() {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  return {
    pixelId: pixelId || null,
    pixelIdSet: !!pixelId,
    accessTokenSet: !!accessToken,
    accessTokenValid: accessToken?.startsWith('EAA') || false,
    accessTokenPreview: accessToken ? `${accessToken.substring(0, 15)}...` : null,
    testEventCode: testEventCode || null,
    testMode: !!testEventCode,
    apiVersion: META_API_VERSION,
    apiUrl: META_GRAPH_URL,
    websiteUrl: process.env.WEBSITE_URL || 'https://jaxoutdoorspaces.com',
  };
}

export default {
  trackPageView,
  trackLead,
  trackContact,
  sendTestEvent,
  sendEvent,
  getConfigStatus,
  hashData,
  hashPhone,
  buildUserData,
};
