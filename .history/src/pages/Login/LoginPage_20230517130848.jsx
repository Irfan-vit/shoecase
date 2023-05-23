import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
const Login = () => {
  const [userDetails, setUserDetails] = useState()
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      <button
        onClick={() =>
          getUser({
            email :'adarshbalika@gmail.com',
            password: 'adarshbalika',
          })
        }
      >
        Login With Test Credentials
      </button>

      {/* <form onSubmit={(e) => getUser(e, {})}>
        <label>
          username
          <input type="email" name="" id="" />
        </label>
        <label htmlFor="">
          password
          <input type="password" />
        </label>
        <button>submit</button>
      </form> */}

      {/* <button
        onClick={() => {
          token ? setToken(false) : setToken(true)
          getUser()
          navigate(location.state.from.pathname, { replace: true })
        }}
      >
        login
      </button> */}
    </>
  )
}

export default Login
