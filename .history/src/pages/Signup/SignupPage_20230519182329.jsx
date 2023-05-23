import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const Signup = () => {
  const { setUser } = useAuth()
  const [userParams, setUserParams] = useState({
    email: '',
    password: '',
  })
  return (
    <>
      <h1>This is Signup</h1>
      <form
        onSubmit={(e) =>
          const user
          setUser(e, { email: 'wobalika@gmail.com', password: 'wobalika' })
        }
      >
        <label htmlFor="email">
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" />
        </label>
        <button>Signup</button>
      </form>
    </>
  )
}

export default Signup
