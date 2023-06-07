import { useUserData } from '../../../context/UserDataContext'
import { v4 as uuid } from 'uuid'

import {
  StyledAddressWrapper,
  StyledAddress,
  StyledAddressForm,
} from '../../../styles/index'

import { Button } from '../../../components/buttons/Primary'
import { useState } from 'react'

const Shipping = () => {
  const { userData, userDispatch } = useUserData()
  const [toggleEdit, setEdit] = useState({ id: null, state: false })
  return (
    <>
      <StyledAddressWrapper>
        <h2>Shipping Address</h2>
        {userData?.address?.map((user) =>
          toggleEdit.state === true && toggleEdit.id === user.id ? (
            <StyledAddressForm>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const address = {
                    name: formData?.get('name') ?? 'john',
                    mobile: formData?.get('mobile') ?? '9234567856',
                    pin: formData?.get('pin') ?? '500044',
                    city: formData?.get('city') ?? 'hyderabad',
                    location: formData.get('location') ?? 'Hi-tech City',
                    tag: user.id,
                  }
                  userDispatch({
                    type: 'editAddress',
                    payload: address,
                  })
                  setEdit({ id: null, state: false })
                  e.target.reset()
                }}
              >
                <label htmlFor="location">
                  location
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    defaultValue={user.location}
                    required
                  />
                </label>
                <label htmlFor="name">
                  name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={user.name}
                    required
                  />
                </label>
                <label htmlFor="mobile">
                  phone
                  <input
                    type="number"
                    name="mobile"
                    placeholder="phone"
                    defaultValue={user.mobile}
                    required
                  />
                </label>
                <label htmlFor="pin">
                  pin
                  <input
                    type="number"
                    name="pin"
                    placeholder="pin"
                    defaultValue={user.pin}
                    required
                  />
                </label>
                <label htmlFor="city">
                  city
                  <input
                    type="text"
                    name="city"
                    placeholder="city"
                    defaultValue={user.city}
                    required
                  />
                </label>
                <Button>Save</Button>
              </form>
            </StyledAddressForm>
          ) : (
            <StyledAddress>
              <label htmlFor="">
                <input
                  type="radio"
                  onChange={() =>
                    userDispatch({
                      type: 'currentAddress',
                      payload: user.id,
                    })
                  }
                />
                <div>
                  <p>
                    <strong>{user.name}</strong>
                  </p>
                  <p
                    style={{
                      maxWidth: '200px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {user.location}
                  </p>
                  <p>{user.city}</p>
                  <p>{user.pin}</p>
                  <p>{user.mobile}</p>
                </div>
                <div>
                  <p onClick={() => setEdit({ id: user.id, state: true })}>
                    Edit
                  </p>
                  <hr
                    style={{
                      backgroundColor: 'red',
                      color: 'red',
                      width: '2px',
                      height: '100%',
                    }}
                  />
                  <p
                    onClick={() =>
                      userDispatch({
                        type: 'removeAddress',
                        payload: user.id,
                      })
                    }
                  >
                    Remove
                  </p>
                </div>
              </label>
            </StyledAddress>
          ),
        )}

        <StyledAddressForm>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const address = {
                name: formData?.get('name') ?? 'john',
                mobile: formData?.get('mobile') ?? '9234567856',
                pin: formData?.get('pin') ?? '500044',
                city: formData?.get('city') ?? 'hyderabad',
                location: formData.get('location') ?? 'Hi-tech City',
                id: uuid(),
              }
              userDispatch({ type: 'addAddress', payload: address })
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
            <Button>Add New Address</Button>
          </form>
        </StyledAddressForm>
      </StyledAddressWrapper>
    </>
  )
}

export default Shipping
