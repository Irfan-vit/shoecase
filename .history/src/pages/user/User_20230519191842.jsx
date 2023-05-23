import { useAuth } from '../../context/AuthContext'

const User = () => {
  const { token } = useAuth
  console.log()
  return (
    <>
      <div></div>
    </>
  )
}

export default User
