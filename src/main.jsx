import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routs from './Routes/Routs.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <AuthProvider>
       <RouterProvider router={Routs}></RouterProvider>
     </AuthProvider>
    </QueryClientProvider>
    <Toaster/>
  </React.StrictMode>,
)
