import { useMutation, useQueryClient } from '@tanstack/react-query'
const useRemoveFromCart = (removeFromCart, token) => {
  const queryClient = useQueryClient()
  const removeFromCartMutation = useMutation(
    removeFromCart,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getCart', token], (currentUser) => {
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getCart'])
      },
    },
  )
  return { removeFromCartMutation }
}
export default useRemoveFromCart
