import { useQuery, useQueryClient } from '@tanstack/react-query'
import { products } from '../api/products'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../rtk/productsSlice'
import { useUserData } from '../context/UserDataContext'
const useProductsData = (queryState) => {
  const dispatch = useDispatch()
  const { setcurrentpage } = useUserData()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [queryState])
  useEffect(() => {
    setcurrentpage(1)
    dispatch(setPage(1))
  }, [
    queryState?.sort?.byPriceRange,
    queryState?.sort,
    queryState?.categories,
    dispatch,
    setcurrentpage,
  ])
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
