import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth()
  console.log(JSON.parse(token), 'token from requiresAuth')
  const data = 
  return (
    <>
      <div>User</div>
    </>
  )
}

export default User
