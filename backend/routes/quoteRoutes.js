import express from 'express';
import QuoteService from '../services/quoteService.js';
import EmailService from '../services/emailService.js';
import MetaConversionsService from '../services/metaConversionsService.js';
import { validateQuoteRequest, handleValidationErrors } from '../middleware/validation.js';

const router = express.Router();

/**
 * POST /api/quotes
 * Submit a new quote request
 */
router.post('/', validateQuoteRequest, handleValidationErrors, async (req, res) => {
  try {
    // Extract IP address and user agent for tracking
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Create new quote request using Supabase
    const quoteData = {
      ...req.body,
      ipAddress,
      userAgent
    };

    const savedQuote = await QuoteService.create(quoteData);

    // Send notification email to company
    const notificationResult = await EmailService.sendQuoteNotification(savedQuote);

    // Send confirmation email to customer
    const confirmationResult = await EmailService.sendCustomerConfirmation(savedQuote);

    // Update email status in database
    if (notificationResult.success) {
      await QuoteService.updateEmailStatus(savedQuote.id, true);
    } else {
      await QuoteService.updateEmailStatus(savedQuote.id, false, notificationResult.error);
    }

    // Send Meta Conversions API Lead event
    const metaRequestInfo = {
      ipAddress,
      userAgent,
      sourceUrl: req.headers.referer || req.headers.origin,
      fbc: req.body._fbc, // Facebook click ID from frontend
      fbp: req.body._fbp, // Facebook browser ID from frontend
    };

    // Track lead and get eventId for frontend deduplication
    let metaEventId = null;
    try {
      const metaResult = await MetaConversionsService.trackLead(savedQuote, metaRequestInfo);
      metaEventId = metaResult.eventId;
      if (metaResult.success) {
        console.log('Meta Lead event sent:', metaResult.eventId);
      } else {
        console.warn('Meta Lead event failed:', metaResult.error);
      }
    } catch (err) {
      console.error('Meta Conversions API error:', err);
    }

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Your quote request has been submitted successfully!',
      data: {
        id: savedQuote.id,
        fullName: savedQuote.fullName,
        email: savedQuote.email,
        projectType: savedQuote.projectType
      },
      emailStatus: {
        notification: notificationResult.success,
        confirmation: confirmationResult.success
      },
      eventId: metaEventId, // For frontend Meta Pixel deduplication
    });

  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * GET /api/quotes/recent
 * Get recent quote requests (protected endpoint - add authentication in production)
 */
router.get('/recent', async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 7;
    const quotes = await QuoteService.findRecent(days);

    res.json({
      success: true,
      count: quotes.length,
      data: quotes
    });
  } catch (error) {
    console.error('Error fetching recent quotes:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching quote requests',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * GET /api/quotes/:id
 * Get a specific quote request (protected endpoint - add authentication in production)
 */
router.get('/:id', async (req, res) => {
  try {
    const quote = await QuoteService.findById(req.params.id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote request not found'
      });
    }

    res.json({
      success: true,
      data: quote
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching quote request',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * PATCH /api/quotes/:id/status
 * Update quote status (protected endpoint - add authentication in production)
 */
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['new', 'contacted', 'quoted', 'won', 'lost', 'archived'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    const quote = await QuoteService.updateStatus(req.params.id, status);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote request not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: quote
    });
  } catch (error) {
    console.error('Error updating quote status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating quote status',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;