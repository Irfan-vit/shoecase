import { useAuth } from '../../context/AuthContext'

const Signup = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Signup</h1>
      <form>
        <button type="submit"></button>
      </form>
    </>
  )
}

export default Signup
