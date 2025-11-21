# Database Migrations

This directory contains SQL migrations for the Supabase/PostgreSQL database.

## Files

- `001_create_tables.sql` - Initial database schema with quote_requests table

## How to Apply Migrations

### Method 1: Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New query"
4. Copy and paste the contents of the migration file
5. Click "Run" to execute

### Method 2: Using Supabase CLI

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```

4. Run migration:
   ```bash
   supabase db push
   ```

## Migration History

| Version | Date | Description |
|---------|------|-------------|
| 001 | 2024 | Initial schema - creates quote_requests table with all necessary fields, indexes, and RLS policies |

## Notes

- All migrations should be idempotent (safe to run multiple times)
- Test migrations in a development environment first
- Always backup your database before running migrations in production
- The schema includes Row Level Security (RLS) policies for security