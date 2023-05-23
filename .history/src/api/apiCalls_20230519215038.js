import axios from 'axios';

export const SignIn = async ({ email, password }) =>{
    const res = await axios.post(
        `/api/auth/login`,
        JSON.stringify({
          email,
          password,
        }),
      )
}