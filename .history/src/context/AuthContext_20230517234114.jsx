import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const localStorageToken = JSON.parse(localStorage.getItem('token'));
  async function getUser({
    email = 'adarshbalika@gmail.com',
    password = 'adarshbalika',
  }) {
    console.log(email, password)
    const res = await axios.post(
      `/api/auth/login`,
      JSON.stringify({
        email,
        password,
      }),
    )
    localStorage.setItem('token', await res.data.encodedToken)
    navigate(location.state.from.pathname, { replace: true })
  }
  async function setUser(e, { email, password }) {
    e.preventDefault()
    const res = await axios.post(`/api/auth/signup`, {
      email,
      password,
    })
    console.log(res.data)
    localStorage.setItem('token', await res.data.encodedToken)
    console.log(location)
    navigate('/')
  }
  return (
    <AuthContext.Provider value={{ getUser, setUser, token }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
