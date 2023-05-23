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
      <div>
        <h2>Address</h2>
        {userDetails.address.map((e) => (
          <div>
            <p>{e.name}</p>
            <p>{e.mobile}</p>
            <p>{e.pin}</p>
            <p>{e.city}</p>
            <p>{e.location}</p>
          </div>
        ))}
      </div>
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
          e.preventDefault()
          const formData = new FormData(e.target)
          const userData = {
            name: formData?.get('name') ?? 'john',
            mobile: formData?.get('mobile') ?? '9234567856',
            pin: formData?.get('pin') ?? '500044',
            city: formData?.get('city') ?? 'hyderabad',
            location: formData.get('location') ?? 'Hi-tech City',
          }
          userDetails.address.push(userData)
          setUserDetails({...userDetails,)
          e.target.reset()
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
        <button type="clear">add address</button>
      </form>
    </>
  )
}

export default User
