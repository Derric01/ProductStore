const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Create .nvmrc file for Vercel
console.log('\n📌 Creating .nvmrc file for Vercel...');
fs.writeFileSync(path.join(__dirname, '.nvmrc'), '18.x');

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
  console.log('\n🚀 You can now deploy your application to Vercel:');
  console.log('1. Run: vercel (if Vercel CLI is installed)');
  console.log('2. Or connect your GitHub repository to Vercel dashboard');
  console.log('\n⚠️ IMPORTANT: Set these environment variables in Vercel:');
  console.log('  - MONGO_URI=mongodb+srv://derricsamson17:eXIhnoKvUYaxFxGR@cluster0.68utnvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log('  - PORT=5000');
  console.log('  - NODE_ENV=production');
});
});