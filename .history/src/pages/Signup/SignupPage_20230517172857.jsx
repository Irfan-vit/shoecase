const Signup = () => {
  const { getUser } = useAuth()
  return (
    <>
      <h1>This is Signup</h1>
      <form>
        <button
          type="submit"
          onClick={() =>
            getUser({ email: 'balika@gmail.com', password: 'balika' })
          }
        ></button>
      </form>
    </>
  )
}

export default Signup
