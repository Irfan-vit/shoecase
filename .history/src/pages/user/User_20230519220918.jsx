import { useAuth } from '../../context/AuthContext'

const User = () => {
  //   const { token } = useAuth()
  //   console.log(JSON.parse(token), 'token from requiresAuth')
  //   const data = JSON.parse(token)
  return (
    <>
      <div>User</div>
      <button
        onClick={() => {
          localStorage.clear()
          navi
        }}
      >
        Log out
      </button>
    </>
  )
}

export default User
