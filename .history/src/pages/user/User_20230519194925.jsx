import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  const data = JSON.parse(token)
  console.log(data.email, 'data')
  return (
    <>
      <div>{data.createdUser?.firstName}</div>
    </>
  )
}

export default User
