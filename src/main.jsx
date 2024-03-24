import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage></Homepage>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
  // </React.StrictMode>,
)
