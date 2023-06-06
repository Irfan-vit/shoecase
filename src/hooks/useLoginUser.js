import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../context/AuthContext'
const useLogin = () => {
  const { setUser } = useAuth()
  const login = async () => {
    const res = await axios.post(`/api/auth/login`, {
      email: 'adarshbalika@gmail.com',
      password: 'adarshbalika',
    })
    return res.data
  }

  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      setUser({ token: data.encodedToken, user: data.foundUser })
    },
  })
  return { loginMutation }
}

export default useLogin
