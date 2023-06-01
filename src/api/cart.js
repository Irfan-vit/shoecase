import axios from 'axios'

export const getCart = async ({ queryKey }) => {
  console.log(queryKey, 'qk')
  const token = queryKey[1]
  const res = await axios.get('/api/user/cart', {
    headers: { authorization: token },
  })
  console.log(res.data.cart, 'refetch')
  return res.data.cart
}

export const addToCart = async ({ queryKey }) => {
  const [, token, product] = queryKey
  const res = await axios.post(
    `/api/user/cart`,
    { product },
    {
      headers: { authorization: token },
    },
  )
  return res.data.cart
}

export const removeFromCart = async (token, id) => {
  const res = await axios.delete(`/api/user/cart/${id}`, {
    headers: { authorization: token },
  })
  return res.data.cart
}
