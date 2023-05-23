import axios from 'axios'

export const products = async () => {
  const res = await axios.get('/api/categories')
  return res.data.categories
}
