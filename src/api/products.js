import axios from 'axios'

export const productsSearch = async (queryClient, search) => {
  const res = await axios.get(`/api/products/search?search=${search ?? ''}`)
  return res.data.products
}

export const products = async (queryClient, queryState) => {
  const categoriesString = queryState?.categories
    ?.map((category) => `categories[]=${category}`)
    .join('&')
  let currPage = queryState?.pagination?.page
  const sortByPrice = queryState?.sort?.byPrice
  const sortByRating = queryState?.sort?.byRating
  const filterByPriceRange = queryState?.sort?.byPriceRange
  const res = await axios.get(
    `/api/products?currPage=${currPage}&${categoriesString}&sortByPrice=${sortByPrice}&sortByRating=${sortByRating}&filterByPriceRange=${filterByPriceRange}`,
  )
  res?.data?.products.map((item) =>
    queryClient.setQueryData(['id', item._id], item),
  )
  return res.data.products
}

export const productDetail = async (id) => {
  const res = await axios.get(`/api/products/${id}`)
  return res.data.product
}
