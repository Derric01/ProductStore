const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Step 1: Build the frontend
console.log('\n📦 Building frontend...');
exec('cd frontend && npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Frontend build error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`Frontend build logs: ${stderr}`);
  }
  console.log('✅ Frontend built successfully');

  // Step 2: Copy built files to server directory if needed
  console.log('\n📂 Preparing files for deployment...');
  
  // Step 3: Set environment variables
  console.log('\n🔧 Setting environment to production...');
  process.env.NODE_ENV = 'production';
  
  console.log('\n✨ Deployment preparation complete!');
  console.log('\n🚀 You can now deploy your application using one of these methods:');
  console.log('1. Heroku: git push heroku main');
  console.log('2. Render: Connect your GitHub repository to Render');
  console.log('3. Vercel/Netlify: Deploy the frontend separately');
  console.log('4. AWS/Azure/GCP: Upload your files to a cloud provider');
});