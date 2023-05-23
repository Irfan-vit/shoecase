import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { token, setToken } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <h1>This is Login</h1>
      <button
        onClick={() => {
          token ? setToken(false) : setToken(true)
          navigate()
        }}
      >
        login
      </button>
    </>
  )
}

export default Login
