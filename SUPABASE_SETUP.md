# Supabase Setup Instructions for JAX Pavers Backend

## Overview
The backend has been migrated from MongoDB to PostgreSQL using Supabase. This guide will help you set up the new database infrastructure.

## Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier available at https://supabase.com)
- Resend account for email notifications (https://resend.com)

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New project"
3. Fill in the project details:
   - Project name: `jax-pavers` (or your preferred name)
   - Database password: Choose a strong password (save this!)
   - Region: Select the closest region to Jacksonville, FL (likely US East)
4. Click "Create new project" and wait for setup to complete

## Step 2: Set Up the Database Schema

1. Once your project is ready, go to the SQL Editor in the Supabase dashboard
2. Click "New query"
3. Copy and paste the entire contents of `backend/migrations/001_create_tables.sql`
4. Click "Run" to execute the SQL and create your tables

## Step 3: Get Your API Keys

1. In your Supabase project dashboard, click on "Settings" (gear icon)
2. Navigate to "API" in the left sidebar
3. You'll need two values:
   - **Project URL**: Under "Project URL" (looks like `https://xxxxx.supabase.co`)
   - **Service Role Key**: Under "Project API keys" → "service_role" (click the eye icon to reveal)

   ⚠️ **IMPORTANT**: The service_role key has full access to your database. Never expose it in client-side code!

## Step 4: Configure Environment Variables

1. Navigate to the `backend` directory
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Edit `.env` and add your credentials:
   ```env
   # Server Configuration
   NODE_ENV=development
   PORT=5000
   FRONTEND_URL=http://localhost:5173

   # Supabase Configuration
   SUPABASE_URL=your_project_url_from_step_3
   SUPABASE_SERVICE_KEY=your_service_role_key_from_step_3

   # Email Configuration (Resend)
   RESEND_API_KEY=your_resend_api_key
   NOTIFICATION_EMAIL_FROM=Jax Pavers <info@jaxoutdoorspaces.com>
   NOTIFICATION_EMAIL_TO=info@jaxoutdoorspaces.com

   # Rate Limiting (optional)
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=10
   ```

## Step 5: Install Dependencies and Run

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The server should start on port 5000 with a success message showing "Supabase Connected Successfully"

## Step 6: Test the API

Test the health endpoint:
```bash
curl http://localhost:5000/api/health
```

You should see:
```json
{
  "success": true,
  "message": "JAX Pavers API is running",
  "timestamp": "...",
  "environment": "development",
  "database": "Supabase/PostgreSQL"
}
```

## Database Structure

The migration creates the following structure:

### Tables
- `quote_requests` - Stores all quote form submissions

### Columns
- `id` (UUID) - Primary key
- `full_name` (VARCHAR) - Customer name
- `email` (VARCHAR) - Customer email
- `phone` (VARCHAR) - Customer phone
- `address` (VARCHAR) - Project address
- `project_type` (ENUM) - Type of project
- `project_details` (TEXT) - Project description
- `budget` (ENUM) - Budget range
- `timeline` (ENUM) - Project timeline
- `how_heard` (ENUM) - Lead source
- `status` (ENUM) - Quote status (new, contacted, quoted, won, lost, archived)
- `notes` (TEXT) - Internal notes
- `ip_address` (VARCHAR) - Submitter's IP
- `user_agent` (TEXT) - Browser info
- `source` (VARCHAR) - Source of request
- `email_sent` (BOOLEAN) - Email notification status
- `email_sent_at` (TIMESTAMPTZ) - When email was sent
- `email_error` (TEXT) - Any email errors
- `created_at` (TIMESTAMPTZ) - Creation timestamp
- `updated_at` (TIMESTAMPTZ) - Last update timestamp

## API Endpoints

All endpoints remain the same as before:

- `POST /api/quotes` - Submit a new quote request
- `GET /api/quotes/recent?days=7` - Get recent quotes (admin)
- `GET /api/quotes/:id` - Get specific quote (admin)
- `PATCH /api/quotes/:id/status` - Update quote status (admin)
- `GET /api/health` - Health check

## Viewing Data in Supabase

1. Go to your Supabase dashboard
2. Click on "Table Editor" in the left sidebar
3. Select the `quote_requests` table
4. You can view, filter, and export data directly from here

## Production Deployment

For production deployment:

1. **Environment Variables**: Ensure all production environment variables are set on your hosting platform
2. **CORS**: Update the allowed origins in `server.js` to include your production domain
3. **Row Level Security**: Consider implementing more granular RLS policies in Supabase
4. **Backup**: Set up regular backups in Supabase (Settings → Backups)

## Troubleshooting

### Connection Issues
- Verify your `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are correct
- Check that your IP is not blocked in Supabase (Settings → Database → Connection Pooling)

### Table Not Found
- Ensure you've run the migration SQL in the Supabase SQL Editor
- Check you're connected to the correct project

### Email Not Sending
- Verify your Resend API key is valid
- Check the email addresses in your `.env` file
- Look for email errors in the `email_error` column of quote_requests

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## Migration Benefits

The migration from MongoDB to PostgreSQL/Supabase provides:

1. **Built-in REST API**: Automatic REST endpoints for your tables
2. **Real-time subscriptions**: Ability to subscribe to database changes
3. **Row Level Security**: Fine-grained access control
4. **Built-in Auth**: User authentication if needed in the future
5. **Admin UI**: Visual interface for managing data
6. **Better type safety**: PostgreSQL's strong typing
7. **ACID compliance**: Full transaction support
8. **Cost effective**: Generous free tier

## Support

If you encounter any issues:
1. Check the server logs for error messages
2. Verify all environment variables are set correctly
3. Ensure the database schema was created successfully
4. Check Supabase dashboard for any database errors