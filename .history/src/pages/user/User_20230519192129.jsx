import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth
  console.log(JSON.parsetoken.foundUser)
  return (
    <>
      <div>User</div>
    </>
  )
}

export default User
