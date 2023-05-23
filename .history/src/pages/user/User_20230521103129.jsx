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
      <div>
          <h2>Address</h2>
          {userDetails.address.map((e) => (
            <StyledAddress key={e.id}>
              <h4>{e.name}</h4>
              <p>{e.mobile}</p>
              <p>{e.pin}</p>
              <p>{e.city}</p>
              <p>{e.location}</p>
              <p
                onClick={() => {
                  setUserDetails({
                    ...userDetails,
                    address: userDetails.address.filter(
                      (address) => address.id !== e.id,
                    ),
                  })
                }}
              >
                delete
              </p>
            </StyledAddress>
          ))}
        </div>
      {toggleAddress ? (
       
      ) : (
        <button onClick={() => {}}></button>
      )}



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
