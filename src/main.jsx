// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayouts from './layout/MainLayouts.jsx'
import Blog from './pages/Blog.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        // index:true,
        path:'/',
        element: <Homepage></Homepage>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
        loader:()=>fetch('https://dev.to/api/articles/latest?per_page=20&top=7')
      },
      {
        path:'/blog/:id',
        element:<Blog></Blog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path:'/bookmarks',
        element:<Bookmarks/>
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
  // </React.StrictMode>,
)
