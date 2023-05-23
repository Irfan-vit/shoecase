import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const User = () => {
    const { token } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  const navigate = useNavigate()
  return (
    <>
      <div>{}</div>
      <button
        onClick={() => {
          localStorage.clear()
        //   navigate('/')
        }}
      >
        Log out
      </button>
    </>
  )
}

export default User
