import { useAuth } from '../../context/AuthContext'

const Signup = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Signup</h1>
      <form
        onSubmit={(e) =>
          getUser(e,{ email: 'wobalika@gmail.com', password: 'wobalika',  })
        }
      >
        <button type="submit"></button>
      </form>
    </>
  )
}

export default Signup
