import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { StyledAddress, StyledAddressForm } from './StyledUser'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
const User = () => {
  const { token, setToken, userDetails, setUserDetails } = useAuth()
  const [toggleAddress, setToggleAddress] = useState(false)
  const [toggleEdit, setToggleEdit] = useState({ id: null, state: false })
  const [update, setUpdate] = useState({})
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>{console.log(token, userDetails)}</div>
      <div>
        <h2> User Details</h2>
        <p>Email : {userDetails.email}</p>
        <button
          onClick={() => {
            localStorage.clear()
            setToken(null)
            // navigate('/')
          }}
        >
          Log out
        </button>
      </div>
      <div>
        <h2>Address</h2>
        {userDetails.address.map((e) => (
          <StyledAddress key={e.id}>
            {toggleEdit.state === true && toggleEdit.id === e.id ? (
              newFunction(
                setUpdate,
                update,
                setUserDetails,
                userDetails,
                toggleEdit,
                e,
                setToggleEdit,
              )
            ) : (
              <div>
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
                <p onClick={() => setToggleEdit({ id: e.id, state: true })}>
                  edit
                </p>
              </div>
            )}
          </StyledAddress>
        ))}
      </div>
      {toggleAddress ? (
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
            setUpdate(userData)
            setUserDetails({
              ...userDetails,
              address: [...userDetails.address, userData],
            })
            e.target.reset()
          }}
        >
          <label htmlFor="location">
            location
            <input
              type="text"
              name="location"
              placeholder="location"
              required
            />
          </label>
          <label htmlFor="name">
            name
            <input type="text" name="name" placeholder="name" required />
          </label>
          <label htmlFor="mobile">
            phone
            <input type="number" name="mobile" placeholder="phone" required />
          </label>
          <label htmlFor="pin">
            pin
            <input type="number" name="pin" placeholder="pin" required />
          </label>
          <label htmlFor="city">
            city
            <input type="text" name="city" placeholder="city" required />
          </label>

          <button>add address</button>
          <button onClick={() => setToggleAddress(false)}>close</button>
        </StyledAddressForm>
      ) : (
        <button onClick={() => setToggleAddress(true)}>Add New Address</button>
      )}
    </>
  )
}

export default User
function newFunction(
  setUpdate,
  update,
  setUserDetails,
  userDetails,
  toggleEdit,
  e,
  setToggleEdit,
) {
  return (
    <StyledAddressForm
      onSubmit={(e) => {
        e.preventDefault()
        setUpdate(update)
        console.log(update)
        setUserDetails({
          ...userDetails,
          address: userDetails.address.map((i) => {
            if (i.id === toggleEdit.id) {
              console.log(toggleEdit.id, 'select')
              console.log(i.id, 'map')
              console.log(update)
              return update
            } else {
              return i
            }
          }),
        })
        e.target.reset()
      }}
    >
      <label htmlFor="location">
        location
        <input
          type="text"
          name="location"
          placeholder={e.location}
          defaultValue={update.location}
          onChange={(v) => {
            return setUpdate({ ...update, location: v.target.value })
          }}
          required
        />
      </label>
      <label htmlFor="name">
        name
        <input
          type="text"
          name="name"
          placeholder={e.name}
          defaultValue={update.name}
          onChange={(v) => {
            return setUpdate({ ...update, name: v.target.value })
          }}
          required
        />
      </label>
      <label htmlFor="mobile">
        phone
        <input
          type="number"
          name="mobile"
          placeholder="mobile"
          defaultValue={update.mobile}
          onChange={(v) => {
            return setUpdate({ ...update, mobile: v.target.value })
          }}
          required
        />
      </label>
      <label htmlFor="pin">
        pin
        <input
          type="number"
          name="pin"
          placeholder="pin"
          required
          defaultValue={update.pin}
          onChange={(v) => {
            return setUpdate({ ...update, pin: v.target.value })
          }}
        />
      </label>
      <label htmlFor="city">
        city
        <input
          type="text"
          name="city"
          placeholder="city"
          required
          defaultValue={update.city}
          onChange={(v) => {
            return setUpdate({ ...update, city: v.target.value })
          }}
        />
      </label>

      <button>save</button>
      <button onClick={() => setToggleEdit({ id: null, state: false })}>
        close
      </button>
    </StyledAddressForm>
  )
}
