import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      {/* <button
        onClick={() =>
          getUser({ email: 'balika@gmail.com', password: 'balika' })
        }
      >
        Login With Test Credentials
      </button> */}

      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const userData = {
            email: formData.get('email') ?? 'balika@gmail.com',
            password: formData.get('password') ?? 'adarshbalika',
          }
          console.log(userData)
          getUser(e, userData)
        }}
      >
        <label htmlFor="email">
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" />
        </label>
        <button>SignIn</button>
        <button>test user</button>
      </form>
    </>
  )
}

export default Login
