import axios from 'axios'
import { toast } from 'react-toastify'

export const getCart = async ({ queryKey }) => {
  const token = queryKey[1]
  const res = await axios.get('/api/user/cart', {
    headers: { authorization: token },
  })
  return res.data.cart
}

export const addtocart = async ({ product, token }) => {
  const res = await toast.promise(
    axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: { authorization: token },
      },
    ),
    {
      pending: 'Adding To Cart',
      success: {
        render({ data }) {
          const added = JSON.parse(data.request.requestBody)
          return `added to ${added.product.title} To cart`
        },
      },
      error: 'Promise rejected 🤯',
    },
  )
  return res.data.cart
}

export const removeFromCart = async ({ _id, token }) => {
  const res = await toast.promise(
    axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    }),
    {
      pending: 'Adding To Cart',
      success: {
        render({ data }) {
          return `Removed from cart`
        },
      },
      error: 'Promise rejected 🤯',
    },
  )
  return res.data.cart
}

export const updateCartItemQuantity = async ({ _id, token, type }) => {
  const res = await axios.post(
    `/api/user/cart/${_id}`,
    { action: { type } },
    {
      headers: { authorization: token },
    },
  )
  return res.data.cart
}
