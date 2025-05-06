const app = require('./index');

// Export the Express app as a serverless function
module.exports = (req, res) => {
  // Connect to MongoDB for each serverless function invocation
  const connectDB = require('../backend/db');
  connectDB().then(() => {
    // Pass request to Express app
    return app(req, res);
  }).catch(err => {
    console.error('Database connection error:', err);
    res.status(500).send('Database connection error');
  });
};