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
import ProductDetail from './pages/Product/ProductDetailPage'
import Checkout from './pages/checkout/Checkout'

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
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default App
