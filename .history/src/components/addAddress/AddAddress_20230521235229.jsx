function AddAddress(setUserDetails, userDetails, setToggleAddress) {
    return (
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
          <input type="text" name="location" placeholder="location" required />
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
    )
  }
  