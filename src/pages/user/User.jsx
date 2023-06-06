import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { notify } from '../../components/toasts/Toasts'
import Nav from '../../components/navBar/Nav'
const User = () => {
  const { user, setUser } = useAuth()
  console.log(user)
  const userDetails = user?.user
  const navigate = useNavigate()
  return (
    <>
      <Nav />
      <div
        style={{
          display: 'flex',
          flexFlow: 'column wrap',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'flex-start',
          margin: '0 auto',
        }}
      >
        <div>
          <h2> User Details</h2>
          <p>Email : {userDetails.email}</p>
          <button
            onClick={() => {
              localStorage.clear()
              setUser(null)
              navigate('/')
            }}
          >
            Log out
          </button>
        </div>
        <div>
          <button onClick={notify}>Notify !</button>
        </div>
        <div>
          <h2>Address</h2>
        </div>
      </div>
    </>
  )
}

export default User
