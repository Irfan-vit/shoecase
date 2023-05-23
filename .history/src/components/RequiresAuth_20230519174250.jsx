import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'

export default function RequiresAuth({ children }) {
  useEffect(() => {
    const { token } = useAuth()
  },[])

  console.log(token, 'token from requiresAuth')
  const location = useLocation()
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
