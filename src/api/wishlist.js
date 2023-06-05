import axios from 'axios'
import { toast } from 'react-toastify'

export const getWishlistData = async ({ queryKey }) => {
  const token = queryKey[1]
  const res = await axios.get('/api/user/wishlist', {
    headers: { authorization: token },
  })
  return res.data.wishlist
}

export const addtoWishlist = async ({ product, token }) => {
  const res = await toast.promise(
    axios.post(
      `/api/user/wishlist`,
      { product },
      {
        headers: { authorization: token },
      },
    ),
    {
      pending: 'Adding To Wishlist',
      success: {
        render({ data }) {
          const added = JSON.parse(data.request.requestBody)
          return `added to ${added.product.title} To wishlist`
        },
      },
      error: 'Promise rejected 🤯',
    },
  )
  return res.data.wishlist
}

export const removeFromWishlist = async ({ _id, token }) => {
  const res = await toast.promise(
    axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    }),
    {
      pending: 'Adding To Wishlist',
      success: {
        render({ data }) {
          return `removed from wishlist`
        },
      },
      error: 'Promise rejected 🤯',
    },
  )
  return res.data.wishlist
}
