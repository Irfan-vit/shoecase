import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token, setToken, userDetails, setUserDetails } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>{console.log(token, userDetails.address)}</div>
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
          e.
          const formData = new FormData(e.target)
          const userData = {
            name: formData?.get('name') ?? 'john',
            mobile: formData?.get('mobile') ?? '9234567856',
            pin: formData?.get('pin') ?? '500044',
            city: formData?.get('city') ?? 'hyderabad',
            location: formData.get('location') ?? 'Hi-tech City',
          }
          userDetails.address.push(userData)
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
        <label htmlFor="location">
          <input type="text" name="location" />
        </label>
        <button>add address</button>
      </form>
    </>
  )
}

export default User
