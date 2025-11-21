-- Create enum types for various fields
CREATE TYPE project_type AS ENUM (
  'Driveway',
  'Patio',
  'Pool Deck',
  'Walkway',
  'Retaining Wall',
  'Outdoor Kitchen',
  'Fire Pit',
  'Multiple Projects',
  'Other'
);

CREATE TYPE budget_range AS ENUM (
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  'Over $100,000',
  'Not sure yet'
);

CREATE TYPE timeline_option AS ENUM (
  'ASAP',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Planning for next year',
  'Just exploring options'
);

CREATE TYPE lead_source AS ENUM (
  'Google Search',
  'Facebook',
  'Instagram',
  'Referral',
  'Previous Customer',
  'Yard Sign',
  'Other'
);

CREATE TYPE quote_status AS ENUM (
  'new',
  'contacted',
  'quoted',
  'won',
  'lost',
  'archived'
);

-- Create the quote_requests table
CREATE TABLE quote_requests (
  -- Primary key
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Contact Information
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,

  -- Project Information
  address VARCHAR(500) NOT NULL,
  project_type project_type NOT NULL,
  project_details TEXT NOT NULL CHECK (char_length(project_details) <= 2000),

  -- Additional Information
  budget budget_range,
  timeline timeline_option,
  how_heard lead_source,

  -- System Fields
  status quote_status DEFAULT 'new' NOT NULL,
  notes TEXT CHECK (char_length(notes) <= 5000),
  ip_address VARCHAR(45),
  user_agent TEXT,
  source VARCHAR(50) DEFAULT 'website',

  -- Email Status
  email_sent BOOLEAN DEFAULT FALSE,
  email_sent_at TIMESTAMPTZ,
  email_error TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX idx_quote_requests_email ON quote_requests(email);
CREATE INDEX idx_quote_requests_phone ON quote_requests(phone);
CREATE INDEX idx_quote_requests_status ON quote_requests(status);
CREATE INDEX idx_quote_requests_created_at ON quote_requests(created_at DESC);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_quote_requests_updated_at
  BEFORE UPDATE ON quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add Row Level Security (RLS) policies
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows the service role to perform all operations
CREATE POLICY "Service role can do everything"
  ON quote_requests
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Add comments for documentation
COMMENT ON TABLE quote_requests IS 'Stores all quote requests from the website contact form';
COMMENT ON COLUMN quote_requests.id IS 'Unique identifier for the quote request';
COMMENT ON COLUMN quote_requests.full_name IS 'Customer full name';
COMMENT ON COLUMN quote_requests.email IS 'Customer email address';
COMMENT ON COLUMN quote_requests.phone IS 'Customer phone number';
COMMENT ON COLUMN quote_requests.address IS 'Project location address';
COMMENT ON COLUMN quote_requests.project_type IS 'Type of outdoor project';
COMMENT ON COLUMN quote_requests.project_details IS 'Detailed description of the project';
COMMENT ON COLUMN quote_requests.budget IS 'Customer budget range';
COMMENT ON COLUMN quote_requests.timeline IS 'Project timeline preference';
COMMENT ON COLUMN quote_requests.how_heard IS 'How the customer heard about the company';
COMMENT ON COLUMN quote_requests.status IS 'Current status of the quote request';
COMMENT ON COLUMN quote_requests.notes IS 'Internal notes about the quote request';
COMMENT ON COLUMN quote_requests.ip_address IS 'IP address of the submitter';
COMMENT ON COLUMN quote_requests.user_agent IS 'Browser user agent of the submitter';
COMMENT ON COLUMN quote_requests.source IS 'Source of the quote request';
COMMENT ON COLUMN quote_requests.email_sent IS 'Whether notification email was sent';
COMMENT ON COLUMN quote_requests.email_sent_at IS 'When the notification email was sent';
COMMENT ON COLUMN quote_requests.email_error IS 'Any email sending error message';