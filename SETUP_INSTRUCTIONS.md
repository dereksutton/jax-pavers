# JAX Pavers Website Setup Instructions

## Complete Backend & Frontend Setup Guide

### Prerequisites
- Node.js 18+ installed
- Supabase account (free tier available)
- Resend account for email services

## Backend Setup (PostgreSQL/Supabase)

> **Note**: The backend has been migrated from MongoDB to PostgreSQL using Supabase. For detailed Supabase setup instructions, see [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Set up Supabase
1. Create a Supabase account at [https://supabase.com](https://supabase.com)
2. Create a new project
3. Run the migration SQL from `backend/migrations/001_create_tables.sql` in the Supabase SQL Editor
4. Get your project URL and service role key from Settings → API

### 3. Configure Environment Variables
Create a `.env` file in the backend directory:

```bash
cd backend
cp .env.example .env
```

Edit the `.env` file with your actual values:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# Supabase Configuration
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here

# Email Configuration (Resend)
RESEND_API_KEY=re_YOUR_RESEND_API_KEY
NOTIFICATION_EMAIL_FROM=Jax Pavers <info@jaxoutdoorspaces.com>
NOTIFICATION_EMAIL_TO=info@jaxoutdoorspaces.com

# Rate Limiting (optional)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=10
```

### 4. Set Up Resend for Email
1. Sign up at [Resend](https://resend.com)
2. Verify your domain (for production) or use their test domain
3. Get your API key from the dashboard
4. Add the API key to your .env file

### 5. Start the Backend Server
```bash
cd backend

# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

## Frontend Setup

### 1. Install Frontend Dependencies
```bash
# From the root directory
npm install
```

### 2. Configure Frontend Environment
Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
```

### 3. Start the Frontend
```bash
# Development mode
npm run dev
```

The frontend will run on `http://localhost:5173`

## Testing the Form Submission

1. Ensure both backend and frontend are running
2. Navigate to `http://localhost:5173`
3. Scroll to the "Book a Consultation" section
4. Fill out the form with test data
5. Submit the form

### What Should Happen:
- Form data is saved to Supabase PostgreSQL database
- Notification email is sent to company (configured in NOTIFICATION_EMAIL_TO)
- Confirmation email is sent to the customer
- Success message appears on the website
- Data is viewable in Supabase Table Editor

## Database Management

### Viewing Data
1. Go to your Supabase project dashboard
2. Click "Table Editor" in the sidebar
3. Select the `quote_requests` table
4. View, filter, and export submissions

### Database Schema
The PostgreSQL database includes:
- Strong typing for all fields
- ENUM types for predefined options
- Automatic timestamp management
- Row Level Security (RLS) for protection
- Indexes for optimal query performance

## Production Deployment

### Backend Deployment Options

#### Option 1: Traditional VPS (DigitalOcean, Linode, AWS EC2)
1. Set up Node.js on the server
2. Clone the repository
3. Install dependencies
4. Set up PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start backend/server.js --name jax-pavers-api
   pm2 save
   pm2 startup
   ```
5. Configure Nginx as reverse proxy
6. Set up SSL with Let's Encrypt

#### Option 2: Platform-as-a-Service (Recommended for Simplicity)
- **Railway.app** (Recommended)
- **Render.com**
- **Heroku**
- **Fly.io**

### Frontend Deployment
The frontend can be deployed to:
- **Vercel** (Recommended for React/Vite)
- **Netlify**
- **AWS S3 + CloudFront**
- **Cloudflare Pages**

### Environment Variables for Production
Update your environment variables for production:

Backend `.env`:
```env
NODE_ENV=production
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your_production_service_key
RESEND_API_KEY=re_...          # Production Resend key
FRONTEND_URL=https://jaxoutdoorspaces.com
```

Frontend `.env.production`:
```env
VITE_API_URL=https://api.jaxoutdoorspaces.com/api
```

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Ensure backend is running
3. Verify CORS settings match your frontend URL
4. Check network tab to see if request is being made

### Emails Not Sending
1. Verify Resend API key is correct
2. Check Resend dashboard for failed attempts
3. Ensure email addresses are valid
4. Check backend logs for error messages
5. Look for errors in the `email_error` column in Supabase

### Database Connection Issues
1. Verify SUPABASE_URL and SUPABASE_SERVICE_KEY are correct
2. Check Supabase dashboard for any service issues
3. Ensure the migration SQL has been run
4. Check IP restrictions in Supabase settings

### CORS Errors
1. Verify FRONTEND_URL in backend .env matches your frontend URL
2. Check that credentials are included in fetch requests
3. Ensure proper headers are being sent

## Monitoring & Maintenance

### Recommended Monitoring Tools
- **UptimeRobot** - Monitor uptime
- **Sentry** - Error tracking
- **Supabase Dashboard** - Database monitoring and metrics
- **Resend Dashboard** - Email delivery monitoring

### Regular Maintenance
- Monitor Supabase usage (free tier limits)
- Review form submissions regularly
- Monitor email delivery rates
- Keep dependencies updated
- Supabase handles automatic backups

### Supabase Benefits Over MongoDB
- Built-in admin interface (Table Editor)
- Automatic REST API generation
- Real-time subscriptions capability
- Row Level Security (RLS)
- Built-in authentication (if needed)
- Automatic backups
- Better type safety with PostgreSQL
- ACID compliance for transactions

## Support

For technical issues:
1. Check the backend logs
2. Review Supabase logs in the dashboard
3. Check Resend dashboard for email issues
4. Review browser console for frontend errors
5. Check the Supabase Table Editor for data issues

## Security Checklist

- [ ] Keep SUPABASE_SERVICE_KEY secure (never expose in client code)
- [ ] Use strong Resend API key
- [ ] Enable HTTPS in production
- [ ] Set up rate limiting (already configured)
- [ ] Regular security updates
- [ ] Configure RLS policies appropriately
- [ ] Monitor for suspicious activity
- [ ] GDPR compliance for EU users
- [ ] Regular dependency audits with `npm audit`

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Resend Documentation](https://resend.com/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)