import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routs from './Routes/Routs.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'


const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <AuthProvider>
      <HelmetProvider>
       <RouterProvider router={Routs}></RouterProvider>
       </HelmetProvider>
     </AuthProvider>
    </QueryClientProvider>
    <Toaster/>
  </React.StrictMode>,
)
