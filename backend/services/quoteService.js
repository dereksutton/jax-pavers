import supabase from '../config/supabase.js';

class QuoteService {
  /**
   * Create a new quote request
   */
  static async create(quoteData) {
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .insert([{
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
        }])
        .select()
        .single();

      if (error) throw error;

      // Transform the data to match the expected format
      return this.transformQuoteData(data);
    } catch (error) {
      console.error('Error creating quote request:', error);
      throw error;
    }
  }

  /**
   * Find a quote request by ID
   */
  static async findById(id) {
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return data ? this.transformQuoteData(data) : null;
    } catch (error) {
      console.error('Error finding quote by ID:', error);
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

      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .gte('created_at', date.toISOString())
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data.map(quote => this.transformQuoteData(quote));
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
      const { data, error } = await supabase
        .from('quote_requests')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return data ? this.transformQuoteData(data) : null;
    } catch (error) {
      console.error('Error updating quote status:', error);
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
        email_sent_at: emailSent ? new Date().toISOString() : null
      };

      if (emailError) {
        updateData.email_error = emailError;
      }

      const { data, error } = await supabase
        .from('quote_requests')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return data ? this.transformQuoteData(data) : null;
    } catch (error) {
      console.error('Error updating email status:', error);
      throw error;
    }
  }

  /**
   * Mark quote as contacted
   */
  static async markAsContacted(id) {
    return this.updateStatus(id, 'contacted');
  }

  /**
   * Transform database data to match the expected API format
   */
  static transformQuoteData(data) {
    if (!data) return null;

    return {
      _id: data.id, // Keep _id for backwards compatibility
      id: data.id,
      fullName: data.full_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      projectType: data.project_type,
      projectDetails: data.project_details,
      budget: data.budget,
      timeline: data.timeline,
      howHeard: data.how_heard,
      status: data.status,
      notes: data.notes,
      ipAddress: data.ip_address,
      userAgent: data.user_agent,
      source: data.source,
      emailSent: data.email_sent,
      emailSentAt: data.email_sent_at,
      emailError: data.email_error,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      // Add virtual property for formatted phone
      formattedPhone: this.formatPhone(data.phone)
    };
  }

  /**
   * Format phone number
   */
  static formatPhone(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  }
}

export default QuoteService;