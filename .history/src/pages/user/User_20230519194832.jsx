import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  const data = JSON.parse(token)
  console.log(data.foundUser ?? data.createdUser, 'data')
  return (
    <>
      <div>{data.foundUser?.firstName || data.createdUse?.firstName}</div>
    </>
  )
}

export default User
