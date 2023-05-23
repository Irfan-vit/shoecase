import { useAuth } from '../../context/AuthContext'

const User = () => {
  const {
    token: { foundUser },
  } = useAuth()
  console.log(JSON.parse(foundUser), 'token from requiresAuth')
  return (
    <>
      <div>User</div>
    </>
  )
}

export default User
