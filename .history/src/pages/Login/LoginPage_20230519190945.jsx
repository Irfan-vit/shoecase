import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const userData = {
            email: formData?.get('email') ?? 'balika@gmail.com',
            password: formData?.get('password') ?? 'adarshbalika',
          }
          console.log(userData)
          getUser(userData, e)
        }}
      >
        <label htmlFor="email">
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" />
        </label>
        <button>SignIn</button>
        <button
        onClick={(e) =>
          getUser(
            {
              email: 'adarshbalika@gmail.com',
              password: 'adarshbalika',
            },
            e,
          )
        }
      >
        Login With Test Credentials
      </button>
      </form>
      {/* <form> */}
      {/* <button
        onClick={(e) =>
          getUser(
            {
              email: 'adarshbalika@gmail.com',
              password: 'adarshbalika',
            },
            e,
          )
        }
      >
        Login With Test Credentials
      </button> */}
      {/* </form> */}
    </>
  )
}

export default Login
