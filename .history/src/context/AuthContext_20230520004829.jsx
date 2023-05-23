import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { login, signup } from '../api/auth/apiAuth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('token'))
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = useState(localStorageToken?.token)

  async function getUser({ email, password }, e) {
    try {
      e.preventDefault()
      const {
        data: { foundUser, encodedToken },
      } = await login({ email, password })
      localStorage.setItem(
        'token',
        JSON.stringify({ token: encodedToken, user: foundUser }),
      )
      setToken(encodedToken)
      navigate(location?.state?.from?.pathname ?? '/', { replace: true })
    } catch {
      console.error('invalid Credentials')
    }
  }

  async function setUser({ email, password }, e) {
    try {
      e.preventDefault()
      const {
        data: { createdUser, encodedToken },
      } = await login({ email, password })
      console.log(, 'response data')
      localStorage.setItem(
        'token',
        JSON.stringify({ token: encodedToken, user: createdUser }),
      )
      setToken(localStorage.getItem('token'))
      navigate('/')
    } catch {
      console.error('invalid signup')
    }
  }
  return (
    <AuthContext.Provider value={{ getUser, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
