import express from 'express'
import { generateArcticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview, textSummarizer } from '../controllers/ai_controller.js';
import { auth } from '../Middlewares/auth.js';
import { upload } from '../config/multer.js';
const aiRouter=express.Router();
aiRouter.post('/generate-article',auth,generateArcticle)
aiRouter.post('/generate-blog-title',auth,generateBlogTitle)
aiRouter.post('/generate-image',auth,generateImage)
aiRouter.post('/remove-image-background',upload.single('image'),auth,removeImageBackground);
aiRouter.post('/remove-image-object',upload.single('image'),auth,removeImageObject);

aiRouter.post('/resume-review',upload.single('resume'),auth,resumeReview);
aiRouter.post('/text-summarizer',auth,textSummarizer)




export default aiRouter;