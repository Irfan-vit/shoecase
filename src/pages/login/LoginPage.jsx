import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../cart/cartModels/CartSummary'
import login1 from '../../assets/images/login1.jpg'
import { StyledLoginWrapper } from '../../styles'

const Login = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  async function loginUser({ email, password }) {
    try {
      const response = await toast.promise(
        axios.post('/api/auth/login', {
          email,
          password,
        }),
        {
          pending: 'Adding To Cart',
          success: 'logged In Successfully',
          error: 'Wrong Credentials 🤯',
        },
      )
      localStorage.setItem('token', JSON.stringify(response.data.encodedToken))
      localStorage.setItem(
        'userDetails',
        JSON.stringify(response.data.foundUser),
      )
      setUser({
        token: localStorage.getItem('token'),
        user: localStorage.getItem('userDetails'),
      })
      navigate(`${location?.state?.prevPath || '/'}`, { replace: true })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <StyledLoginWrapper>
        <div>
          <img src={login1} alt="" />
          <span></span>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const userData = {
                email: formData?.get('email') ?? '',
                password: formData?.get('password') ?? '',
              }
              loginUser(userData)
            }}
          >
            <label htmlFor="email">
              <p>email</p>
              <input type="email" name="email" placeholder="email" />
            </label>
            <label htmlFor="password">
              <p>password</p>
              <input type="password" name="password" placeholder="password" />
            </label>
            <Button>SignIn</Button>
            <Button
              type="reset"
              onClick={() =>
                loginUser({
                  email: 'adarshbalika@gmail.com',
                  password: 'adarshbalika',
                })
              }
            >
              Guest Login
            </Button>
            <Link to="/signup">new user ? please sigun up</Link>
          </form>
        </div>
      </StyledLoginWrapper>
    </>
  )
}

export default Login
