import { useMutation, useQueryClient } from '@tanstack/react-query'

const useAddToWishlist = (addtoWishlist, token) => {
  const queryClient = useQueryClient()
  const addToWishlistMutation = useMutation(
    addtoWishlist,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['wishlist', token], (currentUser) => {
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['wishlist'])
      },
    },
  )
  return { addToWishlistMutation }
}

export default useAddToWishlist
