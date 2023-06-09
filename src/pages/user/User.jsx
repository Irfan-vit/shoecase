import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../../components/buttons/Primary'
import Nav from '../../components/navBar/Nav'
const User = () => {
  const { user, setUser } = useAuth()
  const userDetails = JSON.parse(user?.user)
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
          <p>Email : {userDetails?.email}</p>
          <Button
            onClick={() => {
              setUser({
                token: null,
                user: null,
              })
              localStorage.clear()
              navigate('/')
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </>
  )
}

export default User
