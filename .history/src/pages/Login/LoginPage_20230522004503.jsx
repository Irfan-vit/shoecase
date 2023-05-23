import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Toaster } from 'react-hot-toast'
// import { login } from '../../components/toasts/Toasts'
const login = () =>
  toast.success('Here is your toast.', {
    duration: 4000,
    position: 'top-center',
  })
const Login = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Login</h1>
      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const userData = {
            email: formData?.get('email') ?? '',
            password: formData?.get('password') ?? '',
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
        <button onClick={login}>SignIn</button>
        <button
          type="reset"
          onClick={
            (login,
            (e) =>
              getUser(
                {
                  email: 'adarshbalika@gmail.com',
                  password: 'adarshbalika',
                },
                e,
              ))
          }
        >
          Login With Test Credentials
        </button>
        <Toaster />
      </form>
    </>
  )
}

export default Login
