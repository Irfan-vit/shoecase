import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const Signup = () => {
  const { setUser } = useAuth()
  return (
    <>
      <h1>This is Signup</h1>
      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target)
          const userData = {
            email: formData?.get('email') ?? 'adarshbalika@gmail.com',
            password: formData?.get('password') ?? 'wobalika',
            address: {
              building: formData?.get('building'),
              area: formData?.get('area'),
            },
          }
          setUser(userData, e)
        }}
      >
        <label htmlFor="email">
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" />
        </label>
        <label htmlFor="building">
          <input type="text" name="building" />
        </label>
        <label htmlFor="area">
          <input type="text" name="area" />
        </label>
        <label htmlFor="city">
          <input type="text" name="city" />
        </label>
        <label htmlFor="pin">
          <input type="number" name="pin" />
        </label>
        <button>Signup</button>
      </form>
    </>
  )
}

export default Signup
