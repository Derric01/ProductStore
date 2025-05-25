const app = require('./index');
const connectDB = require('../backend/db');

// Export the Express app as a serverless function
module.exports = async (req, res) => {
  try {
    // Connect to MongoDB for each serverless function invocation
    await connectDB();
    
    // Create a middleware handler from the Express app
    return app(req, res);
  } catch (err) {
    console.error('Database connection error:', err);
    res.status(500).json({
      success: false,
      message: 'Database connection error'
    });
  }
};