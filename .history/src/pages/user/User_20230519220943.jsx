import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const User = () => {
  //   const { token } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>User</div>
      <button
        onClick={() => {
          localStorage.clear()
          naviate()
        }}
      >
        Log out
      </button>
    </>
  )
}

export default User
