import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home/HomePage'
import Product from './pages/Product/ProductPage'
import Cart from './pages/Cart/CartPage'
import Wishlist from './pages/Wishlist/WishlistPage'
import Login from './pages/Login/LoginPage'
import Signup from './pages/Signup/SignupPage'

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
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/login">Login</Link>
        <Link to=
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
