# ⚡ QuickAi – Full Stack AI SaaS Platform

🌐 **Live Demo:** https://ai-saas-app-gray.vercel.app/

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)
![Clerk](https://img.shields.io/badge/Auth-Clerk-purple)
![AI](https://img.shields.io/badge/AI-Groq%20API-orange)
![ClipDrop API](https://img.shields.io/badge/Image%20Generation-ClipDrop%20API-pink)

**QuickAi** is a full-stack AI SaaS platform that provides intelligent AI-powered tools for content creation, image processing, and resume analysis.

The platform allows users to generate articles, summarize text, review resumes, generate blog titles, and process images using AI.

It also includes **authentication, premium subscriptions, image storage, and user dashboards** to provide a complete SaaS experience.

---

# ✨ Features

## 🤖 AI Content Generation

- AI article generation
- Blog title generation
- Text summarization
- Resume review with constructive feedback
- AI-powered responses using Groq API

---

## 🖼️ AI Image Processing

- Background removal
- Object removal from images
- Download processed images
- Cloud image storage using Cloudinary

---

## 👤 Authentication & User Management

- Secure authentication using Clerk
- User dashboard
- Protected routes
- Premium subscription system
- Usage tracking for free users

---

## 📂 User Dashboard

Users can:

- View generated content
- Access previous AI creations
- Manage account activity
- Track active subscription plans

---

## 📱 Responsive Design

- Fully responsive interface
- Optimized for desktop, tablet, and mobile devices

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Router

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL (Neon DB)

## Authentication

- Clerk Authentication

## AI Integration

- Groq API
- Gemini AI (initial integration)

## Image Storage & Processing

- Cloudinary

## Deployment

- Vercel

---

# ⚡ Installation

### 1. Clone the repository

```bash
git clone https://github.com/kundan-kumar07/AI_SaaS_App.git
cd AI_SaaS_App
```

---

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3. Run the project

#### Start Backend

```bash
npm run dev
```

#### Start Frontend

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create `.env` files in both **client** and **server** directories.

---

## Server `.env`

```env
PORT=3000

DATABASE_URL=your_postgresql_database_url

GROQ_API_KEY=your_groq_api_key

CLERK_SECRET_KEY=your_clerk_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIPDROP_API_KEY=your_clipdrop_api_key
```

---

## Client `.env`

```env
VITE_BASE_URL=http://localhost:3000

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

# 🚀 Live Links

## 🌐 Live Application

https://ai-saas-app-gray.vercel.app/

## 📂 GitHub Repository

https://github.com/kundan-kumar07/AI_SaaS_App

---

# 👨‍💻 Author

**Kundan Kumar Dubey**

GitHub:  
https://github.com/kundan-kumar07
