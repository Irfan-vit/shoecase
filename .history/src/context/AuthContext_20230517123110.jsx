import { createContext, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { users } from '../../backend/db/users'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  async function getUser(e,{email = adarshbalika@gmail.com'}) {
    const res = await axios.post(
      `/api/auth/login`,
      JSON.stringify({
        email: 'adarshbalika@gmail.com',
        password: 'adarshbalika',
      }),
    )
    console.log(res.data)
    navigate(location.state.from.pathname, { replace: true })
  }
  return (
    <AuthContext.Provider value={{ getUser }}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
