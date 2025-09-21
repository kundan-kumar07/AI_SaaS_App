# QuickAi – Full-Stack AI SaaS Application

🚀 [Live Demo](https://ai-saas-app-gray.vercel.app/)


QuickAi is a full-stack AI SaaS application that provides AI-powered tools for content creation, image processing, and resume review. Built with **React**, **Node.js**, **Express**, **PostgreSQL (Neon)**, and **Cloudinary**, QuickAi integrates **Gemini AI** to deliver intelligent features to users.

## Features

### AI Content Generation
- Article generation
- Blog title suggestions
- Text summarization
- Resume review with constructive feedback

### Image Processing
- Background removal
- Object removal with downloadable output

### User Management
- Authentication using **Clerk**
- Premium subscription system with demo card payments
- Responsive dashboard displaying user creations and active plans

## Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL (Neon)  
- **Cloud Storage:** Cloudinary  
- **AI Integration:** Gemini AI  
- **Authentication & Billing:** Clerk  
- **Deployment:** Vercel  

## Links

- **🌐 Live Application:** [https://your-deployed-app-url.vercel.app](https://ai-saas-app-gray.vercel.app/)
- **📂 GitHub Repository:** [https://github.com/kundan-kumar07/AI_SaaS_App](https://github.com/kundan-kumar07/AI_SaaS_App)  

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/kundan-kumar07/AI_SaaS_App
cd QuickAi
```

### 2. Install dependencies
```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

### 3. Set up environment variables

Create `.env` files in **server** and **client** directories:

#### Server .env
```env
PORT=3000
VITE_BASE_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_API_KEY=your_clerk_api_key
```

#### Client .env
```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
```

## Running the Application

### Start the server
```bash
cd server
npm run dev
```

### Start the client
```bash
cd client
npm run dev
```


