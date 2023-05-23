import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { SignIn } from '../api/apiCalls'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = useState(null)

  async function getUser({ email, password }, e) {
    try {
      e.preventDefault()
      const {
        data: { foundUser, encodedToken },
      } = await SignIn({ email, password })
      console.log(foundUser, encodedToken)
      localStorage.setItem('token', JSON.stringify(res.data))
      setToken(localStorage.getItem('token'))
      navigate(location?.state?.from?.pathname ?? '/', { replace: true })
    } catch {
      console.error('invalid Credentials')
    }
  }

  async function setUser({ email, password }, e) {
    try {
      e.preventDefault()
      const res = await axios.post(`/api/auth/signup`, {
        email,
        password,
      })
      localStorage.setItem('token', await JSON.stringify(res.data))
      setToken(localStorage.getItem('token'))
      console.log(JSON.parse(token))
      navigate('/')
    } catch {
      console.error('invalid signup')
    }
  }
  return (
    <AuthContext.Provider value={{ getUser, setUser, token }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
