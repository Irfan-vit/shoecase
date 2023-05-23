import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequiresAuth({ children }) {
  const { token } = useAuth()
  const location = use
  console.log(token)
  return token ? children : <Navigate to="/login" replace />
}
