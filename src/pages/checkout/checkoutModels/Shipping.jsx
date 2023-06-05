import { useUserData } from '../../../context/UserDataContext'
import { v4 as uuid } from 'uuid'

import {
  StyledAddressWrapper,
  StyledAddress,
  StyledAddressForm,
} from '../../../styles/index'

import styled from 'styled-components'
import { useState } from 'react'

const Shipping = () => {
  const { userData, userDispatch } = useUserData()
  const [toggleEdit, setEdit] = useState({ id: null, state: false })
  return (
    <>
      <StyledAddressWrapper>
        <p>BACk to Cart</p>
        <h2>Shipping Address</h2>
        {userData?.address?.map((user) =>
          toggleEdit.state === true && toggleEdit.id === user.id ? (
            <StyledAddressForm>
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
                  userDispatch({
                    type: 'editAddress',
                    payload: {
                      id: user.id,
                      address: userData,
                    },
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
                <button>add address</button>
                <button>close</button>
              </form>
            </StyledAddressForm>
          ) : (
            <StyledAddress>
              <label htmlFor="">
                <input type="radio" />
                <div>
                  <p>
                    <strong>{user.name}</strong>
                  </p>
                  <p
                    style={{
                      width: '200px',
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
                  <p>Remove</p>
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
              const userData = {
                name: formData?.get('name') ?? 'john',
                mobile: formData?.get('mobile') ?? '9234567856',
                pin: formData?.get('pin') ?? '500044',
                city: formData?.get('city') ?? 'hyderabad',
                location: formData.get('location') ?? 'Hi-tech City',
                id: uuid(),
              }
              userDispatch({ type: 'addAddress', payload: userData })
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
            <button>close</button>
          </form>
        </StyledAddressForm>
      </StyledAddressWrapper>
    </>
  )
}

export default Shipping
