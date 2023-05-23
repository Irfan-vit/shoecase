import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth
  console.log(token.foundUser)
  return (
    <>
      <div>User</div>
    </>
  )
}

export default User
