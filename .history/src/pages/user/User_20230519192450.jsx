import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  const data = JSON.parse(token)
  console.log(data.founmd, 'data')
  return (
    <>
      <div>User</div>
    </>
  )
}

export default User
