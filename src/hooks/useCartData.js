import { useQuery } from '@tanstack/react-query'
import { categories } from '../api/categories'

const useCategoriesData = (token, categories) => {
  const categoriesQuery = useQuery(['cart', token], categories)
  return categoriesQuery
}

export default useCategoriesData
