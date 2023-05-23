import axios from 'axios'

export const login = async ({ email, password }) =>
  await axios.post(`/api/auth/login`, {
    email,
    password,
  })

