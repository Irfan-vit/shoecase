import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { makeServer } from './server'

// Call make Server
makeServer()

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <AuthProvider>
  <App />,
  // </AuthProvider>
  // </BrowserRouter>,
)
