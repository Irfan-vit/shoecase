import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { token, setToken } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      <button onClick={() => {(token ? setToken(false) : setToken(true)); Navigate}}>
        login
      </button>
    </>
  )
}

export default Login
