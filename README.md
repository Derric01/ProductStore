# Product Store - MERN Stack Application

A full-stack product management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- View products with images in a responsive grid layout
- Add new products with name, price, and image URL
- Delete existing products
- Dark/light mode toggle
- Sample products for quick setup

## Tech Stack

### Frontend
- React with Vite
- Chakra UI for styling and components
- Zustand for state management
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB for database
- Mongoose for database modeling

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB installed locally or a MongoDB Atlas account

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/product-store.git
   cd product-store
   ```

2. Install dependencies
   ```bash
   npm run install-all
   ```

3. Environment Setup
   - Create a `.env` file in the `backend` folder based on `.env.example`
   - Add your MongoDB connection string

4. Run the application
   ```bash
   npm run dev
   ```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Render**: Connect your GitHub repo and set up as a Web Service
- **Heroku**: Use the included Heroku Procfile
- **Separate Deployment**: Deploy frontend to Netlify/Vercel and backend to a Node.js host

## License
MIT

## Created By
Derric samson
