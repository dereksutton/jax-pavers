# Meta Conversions API & Pixel Setup Guide

This guide walks you through completing the Meta (Facebook) Conversions API integration for your Jax Outdoor Spaces website. The integration provides server-side event tracking that works alongside the browser Pixel for improved accuracy.

## Table of Contents

1. [Overview](#overview)
2. [Current Meta Pixel Status](#current-meta-pixel-status)
3. [Step 1: Access Meta Events Manager](#step-1-access-meta-events-manager)
4. [Step 2: Generate Access Token](#step-2-generate-access-token)
5. [Step 3: Configure Environment Variables](#step-3-configure-environment-variables)
6. [Step 4: Test the Integration](#step-4-test-the-integration)
7. [Step 5: Verify Event Deduplication](#step-5-verify-event-deduplication)
8. [Understanding the Integration](#understanding-the-integration)
9. [Troubleshooting](#troubleshooting)
10. [Best Practices](#best-practices)

---

## Overview

### What's Been Implemented

| Component | Location | Purpose |
|-----------|----------|---------|
| Meta Pixel (Browser) | `index.html` | Tracks PageView automatically |
| Lead Event (Browser) | `src/components/Quote.jsx` | Fires when form is submitted successfully |
| Conversions API (Server) | `backend/services/metaConversionsService.js` | Sends server-side Lead events |
| Quote Route Integration | `backend/routes/quoteRoutes.js` | Triggers Conversions API on form submit |

### Why Both Pixel AND Conversions API?

1. **iOS 14.5+ Privacy Changes**: Apple's App Tracking Transparency blocks many browser-side events
2. **Ad Blockers**: ~30% of users block browser tracking
3. **Better Attribution**: Server-side events aren't affected by browser limitations
4. **Event Deduplication**: Both events share an `eventID` so Meta counts them once

---

## Current Meta Pixel Status

Your Meta Pixel is already installed in `index.html`:

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1505133090590766');
    fbq('track', 'PageView');
</script>
```

**Pixel ID**: `1505133090590766`

### What's Now Tracking

| Event | Trigger | Source |
|-------|---------|--------|
| `PageView` | Every page load | Browser Pixel (automatic) |
| `Lead` | Quote form submission | Browser Pixel + Conversions API |

---

## Step 1: Access Meta Events Manager

### 1.1 Go to Events Manager

1. Log into [Meta Business Suite](https://business.facebook.com/)
2. Click the hamburger menu (☰) in the top left
3. Select **Events Manager** under "All Tools"
4. Select your Pixel: **1505133090590766**

### 1.2 Verify Pixel is Receiving Events

1. In Events Manager, you should see `PageView` events
2. The status should show "Active" with a green dot

---

## Step 2: Generate Access Token

The Conversions API requires an access token to authenticate server-side requests.

### 2.1 Navigate to Settings

1. In Events Manager, click on your Pixel
2. Click the **Settings** tab
3. Scroll down to find **"Conversions API"** section

### 2.2 Generate System User Token (Recommended)

**Option A: Via Events Manager (Easiest)**

1. In the Conversions API section, click **"Generate access token"**
2. If prompted, connect to a Business Manager
3. Copy the generated token immediately (you won't see it again!)

**Option B: Via Business Settings (More Control)**

1. Go to [Business Settings](https://business.facebook.com/settings)
2. Navigate to **Users** > **System Users**
3. Click **"Add"** to create a new system user:
   - Name: `Jax Outdoor Spaces CAPI`
   - Role: `Admin`
4. Click **"Add Assets"**:
   - Select **Pixels**
   - Choose your pixel
   - Enable **"Manage pixel"** permission
5. Click **"Generate New Token"**:
   - Select **"ads_management"** and **"ads_read"** permissions
   - Click **"Generate Token"**
6. Copy the token immediately!

### 2.3 Token Security

- **Never commit the token to git**
- **Store only in environment variables**
- **Rotate periodically** (every 60 days recommended)
- The token grants access to send events to your pixel

---

## Step 3: Configure Environment Variables

### 3.1 Backend Environment Setup

Add these variables to your backend `.env` file:

```bash
# Meta Conversions API Configuration
META_PIXEL_ID=1505133090590766
META_ACCESS_TOKEN=your_access_token_here

# Optional: Website URL for event source
WEBSITE_URL=https://jaxoutdoorspaces.com

# Optional: Test event code (for debugging - remove in production)
# META_TEST_EVENT_CODE=TEST12345
```

**Location**: `C:\Users\derek\jax-pavers\backend\.env`

### 3.2 Example Complete .env

```bash
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_uri

# Email (existing)
EMAIL_FROM=noreply@jaxoutdoorspaces.com

# Google Places API (existing)
GOOGLE_PLACES_API_KEY=your_google_api_key
GOOGLE_PLACE_ID=your_place_id

# Meta Conversions API (NEW)
META_PIXEL_ID=1505133090590766
META_ACCESS_TOKEN=EAAxxxxxxxxxxxxxxx
WEBSITE_URL=https://jaxoutdoorspaces.com
```

### 3.3 Production Environment (Render/Hosting)

Add these environment variables in your hosting platform:

**For Render:**
1. Go to your Render dashboard
2. Select your backend service
3. Go to **Environment** tab
4. Add:
   - `META_PIXEL_ID` = `1505133090590766`
   - `META_ACCESS_TOKEN` = your access token
   - `WEBSITE_URL` = `https://jaxoutdoorspaces.com`

---

## Step 4: Test the Integration

### 4.1 Enable Test Events Mode

1. In Events Manager, click on your Pixel
2. Click the **Test Events** tab
3. Copy the **Test Event Code** (e.g., `TEST12345`)
4. Add to your backend `.env`:
   ```bash
   META_TEST_EVENT_CODE=TEST12345
   ```
5. Restart your backend server

### 4.2 Submit a Test Quote

1. Start your frontend: `npm run dev`
2. Start your backend: `cd backend && npm run dev`
3. Fill out and submit the quote form
4. Check the Test Events tab in Events Manager

### 4.3 Verify Events Received

In the Test Events tab, you should see:

| Event Name | Source | Status |
|------------|--------|--------|
| `Lead` | Pixel (Browser) | Received |
| `Lead` | Server | Received |

Both events should have the same `event_id`, indicating proper deduplication.

### 4.4 Remove Test Mode

After testing, remove the test event code:

```bash
# Remove or comment out this line
# META_TEST_EVENT_CODE=TEST12345
```

---

## Step 5: Verify Event Deduplication

Meta uses `event_id` to deduplicate events from browser and server.

### How It Works

1. **Server generates event ID**: `lead_1705123456789_abc123def`
2. **Server sends to Conversions API** with this ID
3. **Browser Pixel fires** with the same ID
4. **Meta receives both** but counts as ONE event

### Verify Deduplication

1. In Events Manager, go to **Overview**
2. Look at the Lead event
3. Click to see details
4. Check that "Deduplicated" events appear correctly

---

## Understanding the Integration

### Data Flow

```
User Submits Form
        │
        ▼
┌───────────────────┐
│  Frontend (React) │
│                   │
│  1. Validate form │
│  2. Get FB cookies│
│  3. Send to API   │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  Backend (Express)│
│                   │
│  1. Save to DB    │
│  2. Send emails   │
│  3. Call Meta API │◄── Conversions API
│  4. Return response│
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  Frontend (React) │
│                   │
│  1. Show success  │
│  2. Fire fbq Lead │◄── Browser Pixel
└───────────────────┘
```

### User Data Sent to Meta

The Conversions API sends hashed user data for better matching:

| Data | Hashed? | Source |
|------|---------|--------|
| Email | Yes (SHA-256) | Form input |
| Phone | Yes (SHA-256) | Form input |
| First Name | Yes (SHA-256) | Parsed from full name |
| Last Name | Yes (SHA-256) | Parsed from full name |
| City | Yes (SHA-256) | Parsed from address |
| State | Yes (SHA-256) | Parsed from address |
| ZIP | Yes (SHA-256) | Parsed from address |
| IP Address | No | Request headers |
| User Agent | No | Request headers |
| Click ID (fbc) | No | Facebook cookie |
| Browser ID (fbp) | No | Facebook cookie |

### Custom Data Included

Non-PII data sent for analytics:

- `content_name`: "Quote Request"
- `content_category`: Project type
- `project_type`: Driveway, Patio, etc.
- `budget_range`: Selected budget
- `timeline`: Selected timeline
- `how_heard`: How they found you

---

## Troubleshooting

### Events Not Appearing in Events Manager

**Check 1: Environment Variables**
```bash
# In backend, add temporary logging
console.log('META_PIXEL_ID:', process.env.META_PIXEL_ID);
console.log('META_ACCESS_TOKEN:', process.env.META_ACCESS_TOKEN ? 'Set' : 'Missing');
```

**Check 2: Backend Console Logs**
Look for:
- `Meta Lead event sent: lead_xxxxx` = Success
- `Meta Lead event failed: ...` = Check the error
- `Meta Conversions API not configured` = Missing env vars

**Check 3: Test Events Mode**
Enable `META_TEST_EVENT_CODE` to see events in real-time.

### "Invalid OAuth access token" Error

- Token expired or invalid
- Generate a new token in Events Manager
- Ensure token has correct permissions

### Events Not Deduplicating

- Check that `event_id` is the same in both browser and server events
- Verify the frontend receives and uses the eventId from the response

### Low Event Match Quality

Improve matching by ensuring:
- Email is captured correctly
- Phone includes area code
- Address is properly formatted

---

## Best Practices

### 1. Monitor Event Match Quality

In Events Manager:
1. Go to **Data Sources** > Your Pixel
2. Check **Event Match Quality** score
3. Aim for "Good" or "Great" (6.0+ out of 10)

### 2. Use Enhanced Matching

The implementation already includes:
- First/last name parsing
- Address component extraction
- Phone number normalization

### 3. Respect User Privacy

- All PII is hashed before sending
- Users can opt-out via browser settings
- Comply with your privacy policy

### 4. Regular Token Rotation

- Rotate access tokens every 60 days
- Update in all environments (dev, staging, prod)
- Keep old token active briefly during transition

### 5. Monitor for Errors

Set up alerts for:
- Failed Conversions API calls
- Token expiration warnings
- Unusual event volumes

---

## Files Reference

### Files Created/Modified

| File | Purpose |
|------|---------|
| `backend/services/metaConversionsService.js` | Conversions API service |
| `backend/routes/quoteRoutes.js` | Added Meta tracking call |
| `src/components/Quote.jsx` | Added browser Lead event |
| `conversions.md` | This documentation |

### Environment Variables Required

| Variable | Required | Description |
|----------|----------|-------------|
| `META_PIXEL_ID` | Yes | Your Meta Pixel ID |
| `META_ACCESS_TOKEN` | Yes | Conversions API access token |
| `WEBSITE_URL` | No | Your website URL (default: jaxoutdoorspaces.com) |
| `META_TEST_EVENT_CODE` | No | Test mode code (remove in production) |

---

## Quick Start Checklist

- [ ] Access Meta Events Manager
- [ ] Verify Pixel is active and receiving PageView events
- [ ] Generate Conversions API access token
- [ ] Add `META_PIXEL_ID` to backend `.env`
- [ ] Add `META_ACCESS_TOKEN` to backend `.env`
- [ ] Restart backend server
- [ ] Enable Test Events mode (optional but recommended)
- [ ] Submit a test quote form
- [ ] Verify Lead events appear in Events Manager
- [ ] Check both Browser and Server sources show events
- [ ] Verify deduplication is working
- [ ] Remove test event code for production
- [ ] Add env vars to production hosting (Render)
- [ ] Deploy and verify in production

---

## Additional Meta Pixel Recommendations

### Already Implemented
- [x] PageView tracking (automatic)
- [x] Lead event on form submission (browser + server)

### Optional Enhancements (Future)

Consider adding these events for better ad optimization:

| Event | Trigger | Value |
|-------|---------|-------|
| `ViewContent` | Scroll to quote section | Engagement |
| `Contact` | Phone number click | Intent signal |
| `Schedule` | Consultation booked | High intent |

These would require additional implementation but can improve Meta's ad optimization.

---

*Last updated: January 2026*
