import { StyledAddressForm } from '../../pages/user/StyledUser'
import { useAuth } from '../../context/AuthContext'
export default function EditAddress(
  setUpdate,
  update,
  toggleEdit,
  e,
  setToggleEdit,
) {
  const { userDetails, setUserDetails } = useAuth()
  return (
    <StyledAddressForm
      onSubmit={(form) => {
        form.preventDefault()
        setUpdate(update)
        console.log(update)
        setUserDetails({
          ...userDetails,
          address: userDetails.address.map((item) => {
            if (item.id === e.id) {
              console.log(e.id, 'select')
              console.log(item.id, 'map')
              console.log(update)
              return update
            } else {
              return item
            }
          }),
        })
        form.target.reset()
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

      <button disabled={false} onClick={()=>disabled()}>save</button>
    </StyledAddressForm>
  )
}
