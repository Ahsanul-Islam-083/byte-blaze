// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayouts from './layout/MainLayouts.jsx'



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
        element:<Blogs></Blogs>
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
