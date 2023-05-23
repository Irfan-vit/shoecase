import axios from 'axios'

export const categories = async () => {
  const res = await axios.get('/api/categories')
  return res.data.categories
}
