// Vercel build script for frontend
const { execSync } = require('child_process');

// Log each step for debugging
console.log('Starting frontend build process...');

try {
  // Install Vite globally
  console.log('Installing Vite globally...');
  execSync('npm install -g vite', { stdio: 'inherit' });

  // Install dependencies
  console.log('Installing frontend dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build the frontend
  console.log('Building the frontend...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Frontend build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
