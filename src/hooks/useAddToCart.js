import { useMutation, useQueryClient } from '@tanstack/react-query'
const useAddToCart = (addtocart, token) => {
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
  const addToCartMutation = useMutation(
    addtocart,
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
  return { addToCartMutation }
}
export default useAddToCart
