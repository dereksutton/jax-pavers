# Jax Pavers Backend API

Backend API for Jax Pavers website, handling quote request submissions with PostgreSQL/Supabase storage and email notifications via Resend.

## Features

- 📝 Quote request form submission handling
- 📧 Email notifications via Resend (with direct reply functionality)
- 💾 PostgreSQL database with Supabase
- 🔒 Input validation and sanitization
- ⚡ Rate limiting to prevent spam
- 🛡️ Security headers with Helmet
- 🔄 CORS configuration
- 📊 Built-in admin interface via Supabase Table Editor

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL (via Supabase)
- **Email Service**: Resend
- **Validation**: express-validator

## Prerequisites

- Node.js 18+
- Supabase account (free tier available)
- Resend API account

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure your `.env` file with actual values:
```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# Supabase Configuration
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here

# Email Configuration (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
NOTIFICATION_EMAIL_FROM=Jax Pavers <info@jaxoutdoorspaces.com>
NOTIFICATION_EMAIL_TO=info@jaxoutdoorspaces.com

# Rate Limiting (optional)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=10
```

## Supabase Setup

1. Create a project at [https://supabase.com](https://supabase.com)
2. Navigate to SQL Editor in your project dashboard
3. Run the migration script from `migrations/001_create_tables.sql`
4. Get your credentials from Settings → API:
   - Project URL → `SUPABASE_URL`
   - Service Role Key → `SUPABASE_SERVICE_KEY`

For detailed setup instructions, see [SUPABASE_SETUP.md](../SUPABASE_SETUP.md)

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Submit Quote Request
`POST /api/quotes`

Request body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "904-555-0123",
  "address": "123 Main St, Jacksonville, FL",
  "projectType": "Driveway",
  "projectDetails": "Looking to replace concrete driveway with pavers",
  "budget": "$10,000 - $25,000",
  "timeline": "Within 3 months",
  "howHeard": "Google Search"
}
```

### Get Recent Quotes (Protected)
`GET /api/quotes/recent?days=7`

### Get Specific Quote (Protected)
`GET /api/quotes/:id`

### Update Quote Status (Protected)
`PATCH /api/quotes/:id/status`

Request body:
```json
{
  "status": "contacted"
}
```

Valid statuses: `new`, `contacted`, `quoted`, `won`, `lost`, `archived`

### Health Check
`GET /api/health`

## Database Schema

### quote_requests Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `full_name` | VARCHAR(100) | Customer's full name |
| `email` | VARCHAR(255) | Customer's email address |
| `phone` | VARCHAR(50) | Customer's phone number |
| `address` | VARCHAR(500) | Project address |
| `project_type` | ENUM | Type of project (Driveway, Patio, Pool Deck, etc.) |
| `project_details` | TEXT | Detailed project description |
| `budget` | ENUM | Budget range (optional) |
| `timeline` | ENUM | Project timeline (optional) |
| `how_heard` | ENUM | Lead source (optional) |
| `status` | ENUM | Quote status (new, contacted, quoted, won, lost, archived) |
| `notes` | TEXT | Internal notes |
| `email_sent` | BOOLEAN | Whether notification email was sent |
| `email_sent_at` | TIMESTAMPTZ | When notification email was sent |
| `email_error` | TEXT | Any email sending errors |
| `created_at` | TIMESTAMPTZ | Submission timestamp |
| `updated_at` | TIMESTAMPTZ | Last update timestamp |

## Email Flow

When a quote request is submitted:

1. **Company Notification Email**
   - **Sent to**: info@jaxoutdoorspaces.com
   - **Reply-To**: Customer's email (for direct reply functionality)
   - **Contains**: Full quote details with clickable phone/email links

2. **Customer Confirmation Email**
   - **Sent to**: Customer's email
   - **From**: info@jaxoutdoorspaces.com
   - **Contains**: Thank you message and next steps

## Security Features

- **Helmet.js** - Sets various HTTP headers for security
- **CORS** - Configured for specific origins only
- **Rate Limiting** - 10 requests per 15 minutes per IP
- **Input Validation** - All inputs validated and sanitized using express-validator
- **Row Level Security** - Database-level security via Supabase RLS
- **Service Role Key** - Secure backend-only access to database

## Managing Data

### Via Supabase Dashboard
1. Login to your Supabase project
2. Click "Table Editor" in the sidebar
3. Select `quote_requests` table
4. View, filter, sort, and export data directly

### Via API Endpoints
Use the GET endpoints listed above to retrieve quote data programmatically.

## Deployment Considerations

### Environment Variables
Ensure all production environment variables are properly set:
- `NODE_ENV=production`
- `SUPABASE_URL` - Your production Supabase URL
- `SUPABASE_SERVICE_KEY` - Keep this secret!
- `RESEND_API_KEY` - Production Resend key
- `FRONTEND_URL` - Your production frontend URL

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure Resend with verified domain
- [ ] Update CORS origins for production domain
- [ ] Enable HTTPS on your server
- [ ] Set up monitoring (e.g., PM2, systemd)
- [ ] Configure firewall rules
- [ ] Enable Supabase backups (automatic in paid tiers)
- [ ] Add authentication for admin endpoints
- [ ] Review Supabase RLS policies

## Monitoring

### Supabase Dashboard
- Database metrics and performance
- API request logs
- Real-time database activity

### Recommended Additional Tools
- **Sentry** - Error tracking
- **UptimeRobot** - Uptime monitoring
- **Resend Dashboard** - Email delivery metrics

## Troubleshooting

### Database Connection Issues
- Verify `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
- Check Supabase service status
- Ensure migration SQL has been run

### Email Not Sending
- Verify Resend API key
- Check Resend dashboard for failures
- Review `email_error` column in database

### CORS Errors
- Ensure `FRONTEND_URL` matches your frontend
- Check allowed origins in `server.js`

## Support

For detailed setup instructions, see:
- [SUPABASE_SETUP.md](../SUPABASE_SETUP.md) - Complete Supabase setup guide
- [SETUP_INSTRUCTIONS.md](../SETUP_INSTRUCTIONS.md) - Full project setup

For issues or questions, check the documentation or contact the development team.