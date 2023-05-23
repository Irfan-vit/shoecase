import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { makeServer } from './server'

// Call make Server
makeServer()

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// )

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <AuthProvider>
  <App />,
  // </AuthProvider>
  // </BrowserRouter>,
)
