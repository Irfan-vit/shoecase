import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token, setToken, userDetails, setUserDetails } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>{console.log(token, userDetails)}</div>
      <button
        onClick={() => {
          localStorage.clear()
          setToken(null)
          // navigate('/')
        }}
      >
        Log out
      </button>
      <form>
        <label htmlFor="name">
          <input type="text" name="name" />
        </label>
        <label htmlFor="mobile">
          <input type="number" name="mobile" />
        </label>
      </form>
    </>
  )
}

export default User
