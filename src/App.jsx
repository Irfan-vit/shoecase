import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/home/HomePage'
import Product from './pages/Product/ProductPage'
import Cart from './pages/cart/CartPage'
import Wishlist from './pages/wishlist/WishlistPage'
import Login from './pages/login/LoginPage'
import Signup from './pages/signup/SignupPage'
import User from './pages/user/User'

import RequiresAuth from './components/RequiresAuth'
import { useAuth } from './context/AuthContext'
import NavBar from './components/navBar/NavBar'
import NavBarSearch from './components/navBar/NavBarSearch'
import Footer from './components/footer/Footer'
import ProductDetail from './pages/Product/ProductDetailPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequiresAuth>
              <User />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default App
