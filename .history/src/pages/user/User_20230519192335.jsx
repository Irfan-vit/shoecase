import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token: {foun} } = useAuth()
  console.log(JSON.parse(token), 'token from requiresAuth')
  return (
    <>
      <div>User</div>
    </>
  )
}

export default User
