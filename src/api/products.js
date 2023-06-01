import axios from 'axios'

export const products = async (queryClient, queryState) => {
  const categoriesString = queryState?.categories
    ?.map((category) => `categories[]=${category}`)
    .join('&')
  let currPage = queryState?.pagination?.page
  const sortByPrice = queryState?.sort?.byPrice
  const sortByRating = queryState?.sort?.byRating
  const res = await axios.get(
    `/api/products?currPage=${currPage}&${categoriesString}&sortByPrice=${sortByPrice}&sortByRating=${sortByRating}`,
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
