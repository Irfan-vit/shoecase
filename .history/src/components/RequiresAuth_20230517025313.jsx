import { Navigate } from 'react-router-dom'
import {use}

export default function RequiresAuth({ children }) {
  const { token } = useAuth()
  console.log(token)
  return token ? children : <Navigate to="/login" replace />
}
