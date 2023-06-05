import { useMutation, useQueryClient } from '@tanstack/react-query'

const useRemoveFromWishlist = (removeFromWishlist, token) => {
  const queryClient = useQueryClient()
  const removeFromWishlistMutation = useMutation(
    removeFromWishlist,
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
  return { removeFromWishlistMutation }
}

export default useRemoveFromWishlist
