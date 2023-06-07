import { useQuery, useQueryClient } from '@tanstack/react-query'
import { products } from '../api/products'
import { useEffect } from 'react'
const useProductsData = (queryState) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    console.log(queryState)
  }, [queryState])

  const queryClient = useQueryClient()
  const productsQuery = useQuery(
    ['products', queryState],
    () => products(queryClient, queryState),
    {
      keepPreviousData: true,
    },
  )

  return {
    productsQuery,
  }
}

export default useProductsData
