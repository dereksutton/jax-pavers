# Google Reviews Integration Setup Guide

This guide walks you through setting up real Google reviews to display in the Testimonials section of your Jax Outdoor Spaces website using the Google Places API (New).

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Set Up Google Cloud Project](#step-1-set-up-google-cloud-project)
4. [Step 2: Enable the Places API](#step-2-enable-the-places-api)
5. [Step 3: Create API Credentials](#step-3-create-api-credentials)
6. [Step 4: Find Your Google Place ID](#step-4-find-your-google-place-id)
7. [Step 5: Configure Environment Variables](#step-5-configure-environment-variables)
8. [Step 6: Test the Integration](#step-6-test-the-integration)
9. [API Costs & Billing](#api-costs--billing)
10. [Troubleshooting](#troubleshooting)
11. [Security Best Practices](#security-best-practices)

---

## Overview

The integration works as follows:

1. **Frontend** (`Testimonials.jsx`) requests reviews from your backend
2. **Backend** (`/api/reviews`) calls Google Places API with your secure API key
3. **Google** returns your business reviews, rating, and review count
4. **Backend** caches the response for 1 hour to minimize API costs
5. **Frontend** displays the real reviews with a beautiful bento-box layout

If the API is unavailable, the component gracefully falls back to placeholder reviews.

---

## Prerequisites

Before starting, ensure you have:

- [ ] A Google account
- [ ] Access to Google Cloud Console
- [ ] Your business listed on Google Business Profile
- [ ] The backend server running (Express.js on port 5000)

---

## Step 1: Set Up Google Cloud Project

### 1.1 Access Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account

### 1.2 Create a New Project (or use existing)

1. Click the project dropdown at the top of the page
2. Click **"New Project"**
3. Enter a project name: `jax-outdoor-spaces` (or similar)
4. Click **"Create"**
5. Wait for the project to be created, then select it

### 1.3 Enable Billing

The Places API requires billing to be enabled (you get $200 free credit monthly).

1. Go to **Billing** in the left sidebar
2. Click **"Link a billing account"**
3. Follow the prompts to set up billing (credit card required)
4. You won't be charged unless you exceed the free tier

---

## Step 2: Enable the Places API

### 2.1 Enable Places API (New)

1. In Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for **"Places API (New)"**
3. Click on **"Places API (New)"** (not the legacy "Places API")
4. Click **"Enable"**

> **Important**: Make sure you enable "Places API (New)" - this is the modern version with better features and pricing.

---

## Step 3: Create API Credentials

### 3.1 Create an API Key

1. Go to **APIs & Services** > **Credentials**
2. Click **"+ Create Credentials"** at the top
3. Select **"API key"**
4. Your new API key will be displayed - copy it somewhere safe

### 3.2 Restrict the API Key (Recommended)

For security, restrict what the API key can access:

1. Click on your newly created API key
2. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Choose **"Places API (New)"** from the dropdown
   - Click **"Save"**

3. Under **"Application restrictions"** (optional but recommended):
   - For development: Leave as "None"
   - For production: Select **"IP addresses"** and add your server's IP

---

## Step 4: Find Your Google Place ID

Your Place ID is a unique identifier for your business on Google.

### 4.1 Using the Place ID Finder

1. Go to [Google's Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for your business name: **"Jax Outdoor Spaces"** or your full business address
3. Click on your business in the search results
4. Copy the **Place ID** (starts with `ChIJ...`)

### 4.2 Alternative: From Google Maps URL

1. Go to [Google Maps](https://maps.google.com)
2. Search for your business
3. Click on your business listing
4. Look at the URL - it may contain something like `1s0x...` which relates to your place
5. Use the Place ID Finder above for the exact ID

### 4.3 From Google Business Profile

1. Log into [Google Business Profile](https://business.google.com/)
2. Select your business
3. The Place ID may be visible in the URL or settings

**Example Place ID format**: `ChIJN1t_tDeuEmsRUsoyG83frY4`

---

## Step 5: Configure Environment Variables

### 5.1 Backend Environment Setup

Add these variables to your backend `.env` file:

```bash
# Google Places API Configuration
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

**Location**: `C:\Users\derek\jax-pavers\backend\.env`

### 5.2 Example .env file

```bash
# Existing variables
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
# ... other existing variables ...

# Google Places API (Add these)
GOOGLE_PLACES_API_KEY=AIzaSyB1234567890abcdefghijklmnop
GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4
```

### 5.3 Production Environment (Render/Hosting)

When deploying, add these environment variables in your hosting platform:

**For Render:**
1. Go to your Render dashboard
2. Select your backend service
3. Go to **Environment** tab
4. Add:
   - `GOOGLE_PLACES_API_KEY` = your API key
   - `GOOGLE_PLACE_ID` = your Place ID

---

## Step 6: Test the Integration

### 6.1 Restart Your Backend Server

```bash
cd backend
npm run dev
```

### 6.2 Test the API Endpoint

Open your browser or use curl:

```bash
# Test the reviews endpoint
curl http://localhost:5000/api/reviews
```

Expected response:
```json
{
  "success": true,
  "cached": false,
  "businessName": "Jax Outdoor Spaces",
  "rating": 5,
  "totalReviews": 15,
  "reviews": [
    {
      "id": "google-0",
      "authorName": "John D.",
      "rating": 5,
      "text": "Amazing work on our patio...",
      "relativeTime": "2 months ago"
    }
  ]
}
```

### 6.3 Test the Frontend

1. Start your frontend: `npm run dev`
2. Navigate to the Testimonials section
3. You should see real Google reviews with the Google badge

---

## API Costs & Billing

### Pricing Overview (as of 2024)

The Places API (New) uses a pay-as-you-go model:

| Request Type | Cost per 1,000 requests |
|--------------|------------------------|
| Place Details (Basic) | $0 |
| Place Details (with Reviews) | $5.00 |

### Free Tier

Google provides **$200 in free credits monthly**, which means:
- ~40,000 review requests per month for free
- With 1-hour caching, typical usage is ~720 requests/month (once per hour)
- **You likely won't pay anything**

### Cost Optimization (Already Implemented)

The backend includes:
- **1-hour caching**: Reduces API calls significantly
- **Field masking**: Only requests necessary fields (displayName, rating, reviews)
- **Graceful degradation**: Uses cached data even if expired during outages

---

## Troubleshooting

### Common Issues

#### "Google Places API configuration missing"

**Cause**: Environment variables not set
**Fix**: Verify `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are in your `.env` file

#### "Google Places API error: 403"

**Cause**: API key restrictions or billing issues
**Fix**:
1. Check API key restrictions in Google Cloud Console
2. Verify billing is enabled
3. Ensure Places API (New) is enabled

#### "Google Places API error: 400"

**Cause**: Invalid Place ID
**Fix**: Use the Place ID Finder to get the correct ID

#### Reviews not updating

**Cause**: Caching (expected behavior)
**Fix**: Wait 1 hour or call `/api/reviews/refresh` to force refresh

#### Fallback reviews showing

**Cause**: API unavailable or not configured
**Fix**:
1. Check backend console for errors
2. Verify environment variables
3. Test API endpoint directly

### Debug Mode

Add this to your backend `.env` to see detailed errors:
```bash
NODE_ENV=development
```

---

## Security Best Practices

### API Key Protection

1. **Never expose the API key in frontend code** - The key is only used server-side
2. **Use API restrictions** - Limit the key to Places API only
3. **Use IP restrictions in production** - Restrict to your server's IP
4. **Rotate keys periodically** - Create new keys and deprecate old ones

### Environment Variables

1. **Never commit `.env` files** - Ensure `.env` is in `.gitignore`
2. **Use different keys for dev/prod** - Create separate API keys
3. **Monitor usage** - Set up billing alerts in Google Cloud

### Monitoring

Set up billing alerts:
1. Go to **Billing** > **Budgets & alerts**
2. Create a budget (e.g., $10/month)
3. Set alert thresholds (50%, 90%, 100%)

---

## File Reference

### Files Created/Modified

| File | Purpose |
|------|---------|
| `src/services/reviewsService.js` | Frontend service to fetch reviews |
| `backend/routes/reviewRoutes.js` | Backend API endpoint for Google reviews |
| `backend/server.js` | Updated to include review routes |
| `src/components/Testimonials.jsx` | Updated to display real Google reviews |

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/reviews` | GET | Fetch Google reviews (cached) |
| `/api/reviews/refresh` | GET | Force refresh cached reviews |

---

## Quick Start Checklist

- [ ] Create/access Google Cloud project
- [ ] Enable billing on the project
- [ ] Enable Places API (New)
- [ ] Create and restrict API key
- [ ] Find your Place ID
- [ ] Add environment variables to backend `.env`
- [ ] Restart backend server
- [ ] Test `/api/reviews` endpoint
- [ ] Verify reviews display on frontend
- [ ] (Production) Add env vars to hosting platform

---

## Support

If you encounter issues:

1. Check the [Google Places API documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
2. Review error messages in the backend console
3. Verify all environment variables are set correctly
4. Ensure your business has reviews on Google

---

*Last updated: January 2026*
