# 🛍️ Product Store – MERN Stack Application

A responsive, full-stack product management application built with the **MERN** stack – **MongoDB, Express, React, and Node.js**. It allows users to add, view, and delete products with ease, and supports dark/light mode.

---

## 📦 Features

- 🖼️ Display products in a responsive grid layout with images  
- ➕ Add new products with name, price, and image URL  
- ❌ Delete existing products  
- 🌗 Dark/light theme toggle  
- ⚡ Sample product data for quick testing  

---

## 🧰 Tech Stack

### 🔹 Frontend
- React + Vite  
- Chakra UI
- Zustand (state management)  
- React Router  

### 🔹 Backend
- Node.js + Express  
- MongoDB (via Mongoose)  

---

## 🚀 Getting Started

### 🖥️ Prerequisites

- Node.js (v14+)  
- MongoDB (installed locally or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))  

---

### 📁 Folder Structure

```
product-store/
├── backend/     → Express + MongoDB API
└── frontend/    → React + Vite client
```

---

### ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-store.git
   cd product-store
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Create a `.env` file based on `.env.example`:
     ```
     MONGODB_URI=your-mongodb-connection-string
     PORT=5000
     ```

4. **Run the development servers**
   ```bash
   npm run dev
   ```
   This starts both the backend (on port 5000) and frontend (on port 5173).

---

## 🌐 Deployment Guide

> You can deploy **frontend and backend separately** for best results.

### 🖥️ Frontend (React) – Deploy to **Netlify** or **Vercel**

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Upload the `dist/` folder to Netlify or Vercel.  
3. Set environment variables if needed (e.g., API base URL).

### ⚙️ Backend (Express + MongoDB) – Deploy to **Railway** or **Render**

1. Push your code to GitHub.  
2. Connect your repo on [Railway](https://railway.app).  
3. Add the following environment variables:
   - `MONGODB_URI`
   - `PORT` (optional, default is 5000)
   - `NODE_ENV=production`

4. Use the included `Procfile` for deployment configuration.

---

## 🚀 Deployment on Render

### Prerequisites
- A GitHub repository with your project
- A Render account
- MongoDB Atlas database

### Steps to Deploy

1. **Create a new Web Service on Render**
   - Log in to your Render dashboard
   - Click "New" and select "Web Service"
   - Connect your GitHub repository

2. **Configure the Web Service**
   - Name: Choose a name for your service (e.g., "product-store")
   - Environment: Select "Node"
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

3. **Set Environment Variables**
   - Add the following environment variables:
     - `MONGO_URI`: Your MongoDB connection string
     - `PORT`: `10000` (Render will automatically set the PORT to an internal value)
     - `NODE_ENV`: `production`

4. **Deploy the Application**
   - Click "Create Web Service"
   - Wait for the build and deployment to complete (this may take a few minutes)
   - Your application will be available at the URL provided by Render

5. **Monitor the Deployment**
   - Check the logs in the Render dashboard for any errors
   - Verify that your application is running correctly

---

## 🧪 Sample Product Data

To populate with test data, use the "Add Product" form or create a seeder script in the backend.

---

## ❗ Troubleshooting

- **MongoDB connection error?**
  - Double-check your `.env` file
  - Ensure MongoDB is running locally or your Atlas URI is valid

- **Frontend can't connect to backend?**
  - Confirm the API URL is correct in your frontend config
  - Make sure CORS is enabled in Express backend

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Created By

**Derric Samson**
I will soon deploy it!

---

## 🙌 Contributions Welcome!

Feel free to open issues or pull requests to improve this project!
