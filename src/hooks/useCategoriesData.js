import { useQuery } from '@tanstack/react-query'
import { categories } from '../api/categories'

const useCategoriesData = () => {
  const categoriesQuery = useQuery(['cart'], categories)
  return categoriesQuery
}

export default useCategoriesData
