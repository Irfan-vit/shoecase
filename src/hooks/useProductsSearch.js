import { useQuery, useQueryClient } from '@tanstack/react-query'
import { productsSearch } from '../api/products'
import { useEffect } from 'react'
const useProductsSearch = (search) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [search])

  const queryClient = useQueryClient()
  const searchQuery = useQuery(
    ['search', search],
    () => productsSearch(queryClient, search),
    {
      keepPreviousData: true,
    },
  )

  return {
    searchQuery,
  }
}

export default useProductsSearch
