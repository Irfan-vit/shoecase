import { useQuery } from '@tanstack/react-query'
import { getWishlistData } from '../api/wishlist'

const useWishlistData = (token) => {
  const wishlistQuery = useQuery(['wishlist', token], getWishlistData)
  return wishlistQuery
}

export default useWishlistData
