import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './server'
import App from './App'

import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './utils/theme/theme'
import GlobalStyles from './utils/theme/Global'
import 'react-toastify/dist/ReactToastify.min.css'
import './utils/css/typography.css'
import './utils/css/colors.css'

const [theme, setTheme] = useState('light');

// Call make Server
makeServer()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <App />
        <ToastContainer />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
