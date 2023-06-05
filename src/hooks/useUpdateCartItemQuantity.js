import { useMutation, useQueryClient } from '@tanstack/react-query'
const useUpdateCartItemQuantity = (updateCartItemQuantity, token) => {
  const queryClient = useQueryClient()
  const cartItemQuantityMutation = useMutation(
    updateCartItemQuantity,
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
  return { cartItemQuantityMutation }
}
export default useUpdateCartItemQuantity
