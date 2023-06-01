import { useQuery } from '@tanstack/react-query'
import { categories } from '../api/categories'
import { addToCart } from '../api/cart'

const useCategoriesData = (token) => {
  const categoriesQuery = useQuery(['cart', token], categories)
  return categoriesQuery
}

export default useCategoriesData
