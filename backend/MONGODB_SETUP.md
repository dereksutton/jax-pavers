# MongoDB Setup Guide

## Migration Complete!

Your project has been successfully migrated from PostgreSQL/Supabase to MongoDB. Here are your options for setting up MongoDB:

## Option 1: MongoDB Atlas (FREE - Recommended)

MongoDB Atlas offers a free tier with 512MB storage, which is perfect for small projects and lead generation.

### Setup Steps:

1. **Create a Free MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Sign up for a free account

2. **Create a Free Cluster**
   - Choose "Shared" (FREE) option
   - Select a cloud provider (AWS recommended)
   - Choose a region close to you
   - Name your cluster (e.g., "jax-pavers")

3. **Configure Database Access**
   - Go to "Database Access" in the left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and password (save these!)
   - Give the user "Read and write to any database" permissions

4. **Configure Network Access**
   - Go to "Network Access" in the left menu
   - Click "Add IP Address"
   - For development: Click "Add Current IP Address"
   - For production: Add your server's IP address
   - Or allow access from anywhere: Add `0.0.0.0/0` (less secure but convenient)

5. **Get Your Connection String**
   - Go to "Database" in the left menu
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string, it looks like:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/jax_pavers?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials
   - Replace `cluster0.xxxxx` with your actual cluster address

6. **Update Your .env File**
   ```env
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/jax_pavers?retryWrites=true&w=majority
   ```

## Option 2: Local MongoDB Installation

If you prefer to run MongoDB locally:

### Windows Installation:

1. **Download MongoDB Community Server**
   - Go to https://www.mongodb.com/try/download/community
   - Download the Windows MSI installer
   - Run the installer (choose "Complete" installation)
   - Install as a Windows Service

2. **Start MongoDB Service**
   ```cmd
   net start MongoDB
   ```

3. **Update Your .env File**
   ```env
   MONGODB_URI=mongodb://localhost:27017/jax_pavers
   ```

### macOS Installation:

1. **Using Homebrew**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```

2. **Update Your .env File**
   ```env
   MONGODB_URI=mongodb://localhost:27017/jax_pavers
   ```

### Linux Installation:

1. **Ubuntu/Debian**
   ```bash
   sudo apt-get install mongodb
   sudo systemctl start mongodb
   ```

2. **Update Your .env File**
   ```env
   MONGODB_URI=mongodb://localhost:27017/jax_pavers
   ```

## Testing Your Setup

After configuring MongoDB, test your backend:

```bash
cd backend
npm run dev
```

You should see:
```
MongoDB Connected: [your-host]
MongoDB connection test successful
```

## Deployment Considerations

### For Render.com Deployment:

1. Use MongoDB Atlas (Option 1)
2. Add your MongoDB Atlas connection string to Render environment variables
3. Make sure to whitelist Render's IP addresses in MongoDB Atlas Network Access
   - Or use `0.0.0.0/0` to allow all IPs (convenient but less secure)

### Environment Variables to Set on Render:

```
MONGODB_URI=your_mongodb_atlas_connection_string
RESEND_API_KEY=your_resend_api_key
NOTIFICATION_EMAIL_FROM=Jax Pavers <info@jaxoutdoorspaces.com>
NOTIFICATION_EMAIL_TO=info@jaxoutdoorspaces.com
```

## Data Structure

Your MongoDB database will have one collection:
- `quoterequests` - Stores all quote request submissions

The schema maintains all the same fields and validation from your PostgreSQL database:
- Project types, budget ranges, timelines, and lead sources are all preserved
- Email notifications still work through Resend
- All API endpoints remain the same

## Troubleshooting

### Connection Refused Error
- Make sure MongoDB is running (local) or your Atlas cluster is active
- Check your connection string is correct
- Verify network access settings (Atlas)

### Authentication Failed
- Double-check username and password in connection string
- Make sure the database user has proper permissions

### Timeout Errors
- Check your firewall settings
- Verify IP whitelisting in MongoDB Atlas
- Try using `0.0.0.0/0` for network access during testing

## Benefits of MongoDB for Your Project

1. **Free Tier Available**: MongoDB Atlas offers 512MB free forever
2. **No Complex Schemas**: Flexible document structure
3. **Easy Scaling**: Can upgrade to paid tiers as needed
4. **Built-in Backups**: Atlas provides automatic backups
5. **Global Distribution**: Atlas clusters can be deployed worldwide

## Next Steps

1. Choose your MongoDB option (Atlas recommended)
2. Update your `.env` file with the connection string
3. Test the backend locally
4. Deploy to production
5. Update production environment variables

Your application is now fully migrated to MongoDB!