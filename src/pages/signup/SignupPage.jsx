// import { useAuth } from '../../context/AuthContext'

// const Signup = () => {
//   const { setUser } = useAuth()
//   return (
//     <>
//       <h1>This is Signup</h1>
//       <form
//         onSubmit={(e) => {
//           const formData = new FormData(e.target)
//           const userData = {
//             email: formData?.get('email') ?? 'adarshbalika@gmail.com',
//             password: formData?.get('password') ?? 'wobalika',
//           }
//           setUser(userData)
//         }}
//       >
//         <label htmlFor="email">
//           <input type="email" name="email" required />
//         </label>
//         <label htmlFor="password">
//           <input type="text" name="password" required />
//         </label>
//         <button>Signup</button>
//       </form>
//     </>
//   )
// }

// export default Signup

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import login1 from '../../assets/images/login1.jpg'
import { Button } from '../cart/cartModels/CartSummary'
import useLogin from '../../hooks/useLoginUser'

// import { login } from '../../components/toasts/Toasts'
import styled from 'styled-components'
import axios from 'axios'

const StyledLoginWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100vh;
  flex-flow: column wrap;
  > div {
    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 63% 0;
      aspect-ratio: 1/0.5;
      border: 5px solid #555;
      display: inline-block;
    }
  }
  > div:nth-child(1) {
    position: relative;
    height: 100%;
    > span {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        rgba(193, 175, 241, 0.178),
        rgba(232, 205, 255, 0.116)
      );
    }
  }
  > div:nth-child(2) {
    position: fixed;
    height: 100%;
    width: 100%;
    > form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-end;
      align-content: center;
      justify-content: center;
      gap: 2%;
      padding: 0 10%;
      > a {
        text-decoration: none;
        color: ${(props) => props.theme.offSetText};
        font-family: var(--font-family-headings);
        text-align: center;
        width: 100%;
        :hover {
          text-decoration: underline;
          text-decoration-style: solid;
          text-decoration-thickness: 3px;
          text-decoration-skip-ink: none;
          cursor: pointer;
        }
      }
      > label {
        width: 100%;
        > p {
          color: ${(props) => props.theme.offSetText};
          font-family: var(--font-family-headings);
        }
      }
      > label > input {
        border-radius: var(--border-size4);
        cursor: pointer;
        margin: var(--spacing-unit);
        padding: var(--font-xxxs) var(--font-xxs);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
        border: 1px solid var(--primary-color);
        width: 100%;
        float: right;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    > div > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 60% 0%;
      /* object-position: 51%; */
    }
    > div:nth-child(-n + 2) {
      flex-basis: 50%;
      flex-shrink: 1;
    }
    > div:nth-child(2) {
      position: relative;
    }
    > div:nth-child(1) {
      flex-basis: 50%;
      flex-shrink: 1;
    }
  }
`
const Signup = () => {
  const { user, setUser } = useAuth()
  console.log(user)
  const navigate = useNavigate()
  const location = useLocation()
  async function signupUser({ firstName, email, password }) {
    try {
      console.log(firstName, email, password, 'signup')
      const response = await axios.post('/api/auth/signup', {
        email,
        password,
        firstName,
      })
      console.log(response.data)
      localStorage.setItem('token', JSON.stringify(response.data.encodedToken))
      localStorage.setItem(
        'userDetails',
        JSON.stringify(response.data.createdUser),
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
                firstName: formData?.get('username') ?? '',
              }
              signupUser(userData)
            }}
          >
            <label htmlFor="username">
              <p>email</p>
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
