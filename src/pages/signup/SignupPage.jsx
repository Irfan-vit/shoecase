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
          }
          setUser(userData)
        }}
      >
        <label htmlFor="email">
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" required />
        </label>
        <button>Signup</button>
      </form>
    </>
  )
}

export default Signup
