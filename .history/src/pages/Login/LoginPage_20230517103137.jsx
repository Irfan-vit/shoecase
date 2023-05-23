import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'
import { users } from '../../backend/db/users'
const Login = () => {
  const { token, setToken } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  async function getUser() {
    const res = await axios.post('/api/auth/signup', {
      email: 'adarshbalika@gmail.com',
      password: 'adarshbalika',
    })
    console.log(res)
  }
  return (
    <>
      <h1>This is Login</h1>
      {/* <button
        onClick={() => {
          token ? setToken(false) : setToken(true)
          getUser()
          navigate(location.state.from.pathname, { replace: true })
        }}
      >
        login
      </button> */}
      <form>
        <label>
          username
          <input type="text" />
        </label>
        <label htmlFor=""></label>
      </form>
    </>
  )
}

export default Login
