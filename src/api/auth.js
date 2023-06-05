import axios from 'axios'

export const login = async ({ email, password }) =>
  await axios.post(`/api/auth/login`, JSON.stringify({ email, password }))

export const signup = async ({ email, password }) =>
  await axios.post(`/api/auth/signup`, {
    email,
    password,
  })
