#!/bin/bash

# Install dependencies for the main project
npm install

# Navigate to the frontend directory
cd frontend

# Install frontend dependencies
npm install

# Build the frontend
npm run build

# Return to the root directory
cd ..

echo "Build completed successfully!"
