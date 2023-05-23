import React from 'react'
import { createRoot } from 'react-dom/client'
import {B}
import { makeServer } from './server'
import App from './App'

// Call make Server
makeServer()

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <AuthProvider>
  <App />,
  // </AuthProvider>
  // </BrowserRouter>,
)
