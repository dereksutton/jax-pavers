import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // MongoDB connection string - use local MongoDB or MongoDB Atlas
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/jax_pavers';

    // In Mongoose 8.0+, these options are deprecated and no longer needed
    const conn = await mongoose.connect(mongoUri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Test the connection by attempting to ping
    await mongoose.connection.db.admin().ping();
    console.log('MongoDB connection test successful');

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

export default connectDB;