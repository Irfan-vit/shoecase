import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token, setToken, userDetails, setUserDetails } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>{console.log(token, userDetails)}</div>
      <button
        onClick={() => {
          localStorage.clear()
          setToken(null)
          // navigate('/')
        }}
      >
        Log out
      </button>
      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const userData = {
            name: formData?.get('name') ?? 'adarshbalika@gmail.com',
            mobile: formData?.get('mobile') ?? 'wobalika',
            pin: formData?.get('pin') ?? '500044',
            city

          }
          setUserDetails(userData, e)
        }}
      >
        <label htmlFor="name">
          <input type="text" name="name" />
        </label>
        <label htmlFor="mobile">
          <input type="number" name="mobile" />
        </label>
        <label htmlFor="pin">
          <input type="number" name="pin" />
        </label>
        <label htmlFor="city">
          <input type="text" name="city" />
        </label>
        <label htmlFor="address">
          <input type="text" name="address" />
        </label>
        <button>add address</button>
      </form>
    </>
  )
}

export default User
