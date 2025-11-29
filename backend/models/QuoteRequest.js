import mongoose from 'mongoose';

// Define enum values (same as PostgreSQL)
const PROJECT_TYPES = [
  'Driveway',
  'Patio',
  'Pool Deck',
  'Walkway',
  'Retaining Wall',
  'Outdoor Kitchen',
  'Fire Pit',
  'Multiple Projects',
  'Other'
];

const BUDGET_RANGES = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  'Over $100,000',
  'Not sure yet'
];

const TIMELINE_OPTIONS = [
  'ASAP',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Planning for next year',
  'Just exploring options'
];

const LEAD_SOURCES = [
  'Google Search',
  'Facebook',
  'Instagram',
  'Referral',
  'Previous Customer',
  'Yard Sign',
  'Other'
];

const QUOTE_STATUS = [
  'new',
  'contacted',
  'quoted',
  'won',
  'lost',
  'archived'
];

// Create the schema
const quoteRequestSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, 'Full name is required'],
    maxlength: [100, 'Full name cannot exceed 100 characters'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxlength: [255, 'Email cannot exceed 255 characters'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    maxlength: [50, 'Phone number cannot exceed 50 characters'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    maxlength: [500, 'Address cannot exceed 500 characters'],
    trim: true
  },
  project_type: {
    type: String,
    required: [true, 'Project type is required'],
    enum: {
      values: PROJECT_TYPES,
      message: '{VALUE} is not a valid project type'
    }
  },
  project_details: {
    type: String,
    required: [true, 'Project details are required'],
    maxlength: [2000, 'Project details cannot exceed 2000 characters'],
    trim: true
  },
  budget: {
    type: String,
    enum: {
      values: BUDGET_RANGES,
      message: '{VALUE} is not a valid budget range'
    },
    default: null
  },
  timeline: {
    type: String,
    enum: {
      values: TIMELINE_OPTIONS,
      message: '{VALUE} is not a valid timeline option'
    },
    default: null
  },
  how_heard: {
    type: String,
    enum: {
      values: LEAD_SOURCES,
      message: '{VALUE} is not a valid lead source'
    },
    default: null
  },
  status: {
    type: String,
    enum: {
      values: QUOTE_STATUS,
      message: '{VALUE} is not a valid status'
    },
    default: 'new'
  },
  notes: {
    type: String,
    maxlength: [5000, 'Notes cannot exceed 5000 characters'],
    default: null
  },
  ip_address: {
    type: String,
    maxlength: [45, 'IP address cannot exceed 45 characters'],
    default: null
  },
  user_agent: {
    type: String,
    default: null
  },
  source: {
    type: String,
    maxlength: [50, 'Source cannot exceed 50 characters'],
    default: 'website'
  },
  email_sent: {
    type: Boolean,
    default: false
  },
  email_sent_at: {
    type: Date,
    default: null
  },
  email_error: {
    type: String,
    default: null
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// Create indexes for better query performance
quoteRequestSchema.index({ email: 1 });
quoteRequestSchema.index({ phone: 1 });
quoteRequestSchema.index({ status: 1 });
quoteRequestSchema.index({ created_at: -1 });

// Virtual for formatted phone (matches the original PostgreSQL functionality)
quoteRequestSchema.virtual('formattedPhone').get(function() {
  if (!this.phone) return '';
  const cleaned = this.phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return this.phone;
});

// Transform output to match the original API response format
quoteRequestSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    // Convert MongoDB _id to id
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;

    // Convert snake_case field names to camelCase for API response
    const transformed = {
      id: ret.id,
      fullName: ret.full_name,
      email: ret.email,
      phone: ret.phone,
      address: ret.address,
      projectType: ret.project_type,
      projectDetails: ret.project_details,
      budget: ret.budget,
      timeline: ret.timeline,
      howHeard: ret.how_heard,
      status: ret.status,
      notes: ret.notes,
      ipAddress: ret.ip_address,
      userAgent: ret.user_agent,
      source: ret.source,
      emailSent: ret.email_sent,
      emailSentAt: ret.email_sent_at,
      emailError: ret.email_error,
      createdAt: ret.created_at,
      updatedAt: ret.updated_at,
      formattedPhone: ret.formattedPhone,
      // Keep _id for backwards compatibility
      _id: ret.id
    };

    return transformed;
  }
});

// Export the enums for use in other files
quoteRequestSchema.statics.PROJECT_TYPES = PROJECT_TYPES;
quoteRequestSchema.statics.BUDGET_RANGES = BUDGET_RANGES;
quoteRequestSchema.statics.TIMELINE_OPTIONS = TIMELINE_OPTIONS;
quoteRequestSchema.statics.LEAD_SOURCES = LEAD_SOURCES;
quoteRequestSchema.statics.QUOTE_STATUS = QUOTE_STATUS;

const QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);

export default QuoteRequest;