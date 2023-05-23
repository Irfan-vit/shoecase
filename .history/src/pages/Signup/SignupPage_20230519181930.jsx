import { useAuth } from '../../context/AuthContext'

const Signup = () => {
  const { setUser } = useAuth()
  const [userParams, setuser]
  return (
    <>
      <h1>This is Signup</h1>
      <form
        onSubmit={(e) =>
          setUser(e, { email: 'wobalika@gmail.com', password: 'wobalika' })
        }
      >
        <label htmlFor='email'>
          <input type="email" />
        </label>
        <button>Signup</button>
      </form>
    </>
  )
}

export default Signup
