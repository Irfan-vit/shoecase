import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
import { ProductProvider } from './context/ProductContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})

// Call make Server
makeServer()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <ProductProvider></ProductProvider>
        <ThemeProvider theme={defaultTheme}>
          <App />
          <ToastContainer />
          <GlobalStyles />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>,
)
