import { StyledAddressForm } from '../../pages/user/StyledUser'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
export default function EditAddress(props) {
  console.log(props)
  const { userDetails, setUserDetails } = useAuth()
  const [update, setUpdate] = useState(props.currentAddress)
  return (
    <StyledAddressForm
      onSubmit={(form) => {
        form.preventDefault()
        setUpdate(update)
        setUserDetails({
          ...userDetails,
          address: userDetails.address.map((item) => {
            if (item.id === props.currentAddress.id) {
              return update
            } else {
              return item
            }
          }),
        })
        form.target.reset()
        props.toggle({ id: null, state: false })
      }}
    >
      <label htmlFor="location">
        location
        <input
          type="text"
          name="location"
          defaultValue={props.currentAddress.location}
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
          defaultValue={props.currentAddress.name}
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
          defaultValue={props.currentAddress.mobile}
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
          required
          defaultValue={props.currentAddress.pin}
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
          required
          defaultValue={props.currentAddress.city}
          onChange={(v) => {
            return setUpdate({ ...update, city: v.target.value })
          }}
        />
      </label>

      {/* <button>save</button>
      <button onClick={() => props.toggle({ id: null, state: false })}> */}
        cancel
      </button>
    </StyledAddressForm>
  )
}
