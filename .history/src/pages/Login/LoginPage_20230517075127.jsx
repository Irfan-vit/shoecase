import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { token, setToken } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      <button onClick={() => {(token ? setToken(false) : setToken(true); useNa}}>
        login
      </button>
    </>
  )
}

export default Login
