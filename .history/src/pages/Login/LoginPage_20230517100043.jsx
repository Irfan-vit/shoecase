import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { token, setToken } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  async function get() {
    const res = await axios.get('/api/products')
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
