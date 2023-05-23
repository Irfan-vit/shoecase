import axios from 'axios'

export const logIn = async ({ email, password }) =>
  await axios.post(`/api/auth/login`, {
    email,
    password,
  })
