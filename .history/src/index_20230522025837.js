import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './server'
import App from './App'
import 'react-toastify/dist/ReactToastify.min.css'
import 
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'

// Call make Server
makeServer()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </BrowserRouter>,
)
