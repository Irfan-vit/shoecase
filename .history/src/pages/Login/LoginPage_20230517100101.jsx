import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'
const Login = () => {
  const { token, setToken } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  async function getUser() {
    const res = await axios.post('/api/products')
    const dat = res.data.products
    console.log(dat)
  }
  return (
    <>
      <h1>This is Login</h1>
      <button
        onClick={() => {
          token ? setToken(false) : setToken(true)
          navigate(location.state.from.pathname, { replace: true })
        }}
      >
        login
      </button>
    </>
  )
}

export default Login
