const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check if we already have a connection
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These options are no longer needed in newer mongoose versions but kept for compatibility
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // In serverless environments, don't exit the process
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
    throw error;
  }
};

module.exports = connectDB;