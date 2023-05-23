import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home/HomePage'
import Product from './pages/Product/ProductPage'
import Cart from './pages/Cart/CartPage'
import Wishlist from './pages/Wishlist/WishlistPage'
import Login from './pages/Login/LoginPage'
import Signup from './pages/Signup/SignupPage'
import User from './pages/user/User'

import RequiresAuth from './components/RequiresAuth'

function App() {
  async function getCat() {
    const res = await axios.get('/api/products')
    const dat = res.data.products
    console.log(dat)
  }
  useEffect(() => {
    getCat()
  }, [])

  return (
    import { useAuth } from './context/AuthContext'
    <div className="App">
      <nav>
        <Link to="/" style={{ padding: '0.5rem' }}>
          Home
        </Link>
        <Link to="/product" style={{ padding: '0.5rem' }}>
          Product
        </Link>
        <Link to="/cart" style={{ padding: '0.5rem' }}>
          Cart
        </Link>
        <Link to="/wishlist" style={{ padding: '0.5rem' }}>
          Wishlist
        </Link>
        <Link to="/login" style={{ padding: '0.5rem' }}>
          Login
        </Link>
        <Link to="/signup" style={{ padding: '0.5rem' }}>
          Signup
        </Link>
        <Link to="/user" style={{ padding: '0.5rem' }}>
          User
        </Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default App
