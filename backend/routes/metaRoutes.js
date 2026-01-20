/**
 * Meta Conversions API Test Routes
 *
 * These routes help diagnose and test the Meta CAPI integration.
 * Use these during development to verify events are being sent correctly.
 */

import express from 'express';
import MetaConversionsService from '../services/metaConversionsService.js';

const router = express.Router();

/**
 * GET /api/meta/status
 * Check CAPI configuration status
 */
router.get('/status', (req, res) => {
  const config = MetaConversionsService.getConfigStatus();

  res.json({
    success: true,
    message: 'Meta Conversions API Configuration Status',
    config,
    instructions: {
      testEndpoint: 'POST /api/meta/test to send a test event',
      checkEvents: 'Check Meta Events Manager > Test Events tab',
      note: config.testMode
        ? `Test mode enabled with code: ${config.testEventCode}`
        : 'Test mode NOT enabled - set META_TEST_EVENT_CODE in .env',
    },
  });
});

/**
 * POST /api/meta/test
 * Send a test event to Meta to verify CAPI is working
 */
router.post('/test', async (req, res) => {
  console.log('\n====================================================');
  console.log('META CAPI TEST ENDPOINT TRIGGERED');
  console.log('====================================================');

  const requestInfo = {
    ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    sourceUrl: req.headers.referer || req.headers.origin || 'https://jaxoutdoorspaces.com',
  };

  console.log('Request Info:', JSON.stringify(requestInfo, null, 2));

  try {
    const result = await MetaConversionsService.sendTestEvent(requestInfo);

    if (result.success) {
      res.json({
        success: true,
        message: 'Test event sent successfully!',
        result,
        nextSteps: [
          '1. Go to Meta Events Manager',
          '2. Select your Pixel (1505133090590766)',
          '3. Click on "Test Events" tab',
          `4. Look for PageView event with ID: ${result.eventId}`,
          '5. Verify "Received From" shows "Server"',
        ],
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Test event failed',
        result,
        troubleshooting: [
          'Check META_ACCESS_TOKEN is valid and not expired',
          'Verify META_PIXEL_ID is correct',
          'Check server logs for detailed error',
          'Ensure access token has ads_management permission',
        ],
      });
    }
  } catch (error) {
    console.error('Test endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Test event threw an exception',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
});

/**
 * POST /api/meta/pageview
 * Track a PageView event (can be called from frontend on page load)
 */
router.post('/pageview', async (req, res) => {
  const requestInfo = {
    ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    sourceUrl: req.body.url || req.headers.referer || 'https://jaxoutdoorspaces.com',
    fbc: req.body._fbc,
    fbp: req.body._fbp,
  };

  try {
    const result = await MetaConversionsService.trackPageView(requestInfo);

    res.json({
      success: result.success,
      eventId: result.eventId,
      message: result.success ? 'PageView tracked' : 'PageView tracking failed',
      error: result.error,
    });
  } catch (error) {
    console.error('PageView tracking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track PageView',
      error: error.message,
    });
  }
});

/**
 * POST /api/meta/lead
 * Track a Lead event (alternative to tracking in quote route)
 */
router.post('/lead', async (req, res) => {
  const { email, phone, fullName, address, projectType, budget, timeline, howHeard } = req.body;

  const quoteData = {
    email,
    phone,
    fullName,
    address,
    projectType,
    budget,
    timeline,
    howHeard,
  };

  const requestInfo = {
    ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    sourceUrl: req.body.url || req.headers.referer || 'https://jaxoutdoorspaces.com',
    fbc: req.body._fbc,
    fbp: req.body._fbp,
  };

  try {
    const result = await MetaConversionsService.trackLead(quoteData, requestInfo);

    res.json({
      success: result.success,
      eventId: result.eventId,
      message: result.success ? 'Lead tracked' : 'Lead tracking failed',
      error: result.error,
    });
  } catch (error) {
    console.error('Lead tracking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track Lead',
      error: error.message,
    });
  }
});

export default router;
