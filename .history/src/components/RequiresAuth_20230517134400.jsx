import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequiresAuth({ children }) {
  const { token } = useAuth()
  console
  const location = useLocation()
  return token === null ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
