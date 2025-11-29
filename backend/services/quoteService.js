import QuoteRequest from '../models/QuoteRequest.js';

class QuoteService {
  /**
   * Create a new quote request
   */
  static async create(quoteData) {
    try {
      // Map camelCase input to snake_case for MongoDB model
      const quote = new QuoteRequest({
        full_name: quoteData.fullName,
        email: quoteData.email,
        phone: quoteData.phone,
        address: quoteData.address,
        project_type: quoteData.projectType,
        project_details: quoteData.projectDetails,
        budget: quoteData.budget || null,
        timeline: quoteData.timeline || null,
        how_heard: quoteData.howHeard || null,
        ip_address: quoteData.ipAddress || null,
        user_agent: quoteData.userAgent || null,
        source: quoteData.source || 'website'
      });

      const savedQuote = await quote.save();

      // Return the JSON-transformed data (already handles camelCase conversion)
      return savedQuote.toJSON();
    } catch (error) {
      console.error('Error creating quote request:', error);

      // Handle validation errors
      if (error.name === 'ValidationError') {
        const message = Object.values(error.errors)
          .map(err => err.message)
          .join(', ');
        throw new Error(message);
      }

      throw error;
    }
  }

  /**
   * Find a quote request by ID
   */
  static async findById(id) {
    try {
      // MongoDB uses _id, but we'll accept both id and _id
      const quote = await QuoteRequest.findById(id);

      if (!quote) return null;

      return quote.toJSON();
    } catch (error) {
      console.error('Error finding quote by ID:', error);

      // Handle invalid ObjectId format
      if (error.name === 'CastError') {
        return null;
      }

      throw error;
    }
  }

  /**
   * Find recent quote requests
   */
  static async findRecent(days = 7) {
    try {
      const date = new Date();
      date.setDate(date.getDate() - days);

      const quotes = await QuoteRequest
        .find({ created_at: { $gte: date } })
        .sort({ created_at: -1 });

      return quotes.map(quote => quote.toJSON());
    } catch (error) {
      console.error('Error finding recent quotes:', error);
      throw error;
    }
  }

  /**
   * Update quote status
   */
  static async updateStatus(id, status) {
    try {
      const quote = await QuoteRequest.findByIdAndUpdate(
        id,
        {
          status,
          updated_at: new Date()
        },
        {
          new: true, // Return the updated document
          runValidators: true // Run schema validators
        }
      );

      if (!quote) return null;

      return quote.toJSON();
    } catch (error) {
      console.error('Error updating quote status:', error);

      // Handle invalid ObjectId format
      if (error.name === 'CastError') {
        return null;
      }

      // Handle validation errors
      if (error.name === 'ValidationError') {
        const message = Object.values(error.errors)
          .map(err => err.message)
          .join(', ');
        throw new Error(message);
      }

      throw error;
    }
  }

  /**
   * Update email status
   */
  static async updateEmailStatus(id, emailSent, emailError = null) {
    try {
      const updateData = {
        email_sent: emailSent,
        email_sent_at: emailSent ? new Date() : null,
        updated_at: new Date()
      };

      if (emailError) {
        updateData.email_error = emailError;
      }

      const quote = await QuoteRequest.findByIdAndUpdate(
        id,
        updateData,
        {
          new: true,
          runValidators: true
        }
      );

      if (!quote) return null;

      return quote.toJSON();
    } catch (error) {
      console.error('Error updating email status:', error);

      // Handle invalid ObjectId format
      if (error.name === 'CastError') {
        return null;
      }

      throw error;
    }
  }

  /**
   * Mark quote as contacted
   */
  static async markAsContacted(id) {
    return this.updateStatus(id, 'contacted');
  }
}

export default QuoteService;