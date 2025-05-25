const app = require('./index');
const connectDB = require('../backend/db');

// Handler for Vercel serverless function
module.exports = async (req, res) => {
  // Connect to MongoDB for each serverless function invocation
  try {
    await connectDB();
    // Pass the request to Express app
    // Use Express app to handle request
    app(req, res);
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Database connection failed'
    });
  }
};
