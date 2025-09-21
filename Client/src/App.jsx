import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import DashBoard from './pages/DashBoard'
import WriteArticle from './pages/WriteArticle'
import GenerateImages from './pages/GenerateImages'
import Blog_Title from './pages/Blog_Title'
import RemoveObjects from './pages/RemoveObjects'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import TextSummarizer from './pages/TextSummarizer'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'

import {Toaster} from 'react-hot-toast'
 
const App = () => {

  
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
        <Route index element={<DashBoard/>}/>
        <Route path='write-article' element={<WriteArticle/>}/>
        
        <Route path='blog-titles' element={<Blog_Title/>}/>
        
        <Route path='remove-objects' element={<RemoveObjects/>}/>

        <Route path='remove-background' element={<RemoveBackground/>}/>
        <Route path='review-resume' element={<ReviewResume/>}/>
        <Route path='text-summarizer' element={<TextSummarizer/>}/>
        <Route path='community' element={<Community/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
