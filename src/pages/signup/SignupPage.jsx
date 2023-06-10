import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'
import login1 from '../../assets/images/login1.jpg'
import { Button } from '../cart/cartModels/CartSummary'
import axios from 'axios'
import { StyledLoginWrapper } from '../../styles'

const Signup = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  async function signupUser({ firstName, email, password }) {
    try {
      const response = await toast.promise(
        axios.post('/api/auth/signup', {
          email,
          password,
          firstName,
        }),
        {
          pending: 'Adding To Cart',
          success: 'Sign Up Successfully',
          error: 'Please Check Again 🤯',
        },
      )
      localStorage.setItem('token', JSON.stringify(response.data.encodedToken))
      localStorage.setItem(
        'userDetails',
        JSON.stringify(response.data.createdUser),
      )
      setUser({
        token: localStorage.getItem('token'),
        user: localStorage.getItem('userDetails'),
      })
      navigate(`${location?.state?.from?.pathname || '/'}`, { replace: true })
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
                firstName: formData?.get('username') ?? '',
              }
              signupUser(userData)
            }}
          >
            <label htmlFor="username">
              <p>username</p>
              <input type="text" name="username" placeholder="username" />
            </label>
            <label htmlFor="email">
              <p>email</p>
              <input type="email" name="email" placeholder="email" />
            </label>
            <label htmlFor="password">
              <p>password</p>
              <input type="password" name="password" placeholder="password" />
            </label>
            <Button>Sign up</Button>
            <Link to="/login">already have an account Sign In</Link>
          </form>
        </div>
      </StyledLoginWrapper>
    </>
  )
}

export default Signup
