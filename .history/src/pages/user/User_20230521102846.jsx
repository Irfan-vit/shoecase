import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { StyledAddress, StyledAddressForm } from './StyledUser'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
const User = () => {
  const { token, setToken, userDetails, setUserDetails } = useAuth()
  const [toggleAddress, setToggleAddress] = useState(false)
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>{console.log(token, userDetails)}</div>
      <div>
        <h2> User Details</h2>
        <p>Email : {userDetails.email}</p>
      </div>
      {toggleAddress ? () : (div>) }

      <StyledAddressForm
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const userData = {
            name: formData?.get('name') ?? 'john',
            mobile: formData?.get('mobile') ?? '9234567856',
            pin: formData?.get('pin') ?? '500044',
            city: formData?.get('city') ?? 'hyderabad',
            location: formData.get('location') ?? 'Hi-tech City',
            id: uuid(),
          }
          setUserDetails({
            ...userDetails,
            address: [...userDetails.address, userData],
          })
          e.target.reset()
        }}
      >
        <label htmlFor="location">
          location
          <input type="text" name="location" placeholder="location" />
        </label>
        <label htmlFor="name">
          name
          <input type="text" name="name" placeholder="name" />
        </label>
        <label htmlFor="mobile">
          phone
          <input type="number" name="mobile" placeholder="phone" />
        </label>
        <label htmlFor="pin">
          pin
          <input type="number" name="pin" placeholder="pin" />
        </label>
        <label htmlFor="city">
          city
          <input type="text" name="city" placeholder="city" />
        </label>

        <button type="clear">add address</button>
      </StyledAddressForm>

      <button
        onClick={() => {
          localStorage.clear()
          setToken(null)
          // navigate('/')
        }}
      >
        Log out
      </button>
    </>
  )
}

export default User
