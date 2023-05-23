import axios from 'axios'

export const products = async () => {
  const res = await axios.get('/api/products')
  return res.data.products
  console.log(dat)
}
