import { Response } from 'miragejs'

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

export const getSearchProductsHandler = function (schema, request) {
  const { search } = request.queryParams
  const data = [...this.db.products]
  const products = data?.filter((product) =>
    product.title.toLowerCase().includes(search),
  )
  return new Response(200, {}, { products })
}

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllProductsHandler = function (schema, request) {
  let currPage = parseInt(request.queryParams.currPage, 10)
  let star = parseInt(request.queryParams.sortByRating, 10)
  let priceRange = parseInt(request.queryParams.filterByPriceRange, 10)
  const perPage = 8
  try {
    const copy = [...this.db.products]
    const filetrByCategory = (categories, products) => {
      if (!categories) {
        return products
      }
      const filterSet = new Set(categories)
      const filteredProducts = products.filter((product) =>
        filterSet.has(product.categoryName),
      )
      return filteredProducts
    }
    const sortByPrice = (order, filteredData) =>
      order
        ? order === 'highToLow'
          ? (filteredData = [
              ...filteredData.sort((a, b) => Number(b.price) - Number(a.price)),
            ])
          : order === 'lowToHigh'
          ? (filteredData = [
              ...filteredData.sort((a, b) => Number(a.price) - Number(b.price)),
            ])
          : (filteredData = [...filteredData])
        : (filteredData = [...filteredData])
    const sortByRating = (rating, filteredData) => {
      if (!rating) {
        return filteredData
      }
      const filteredProducts = filteredData.filter(
        (product) => product.rating >= rating,
      )
      return filteredProducts
    }
    const filterByPriceRange = (priceRange, filteredData) => {
      return filteredData.filter(
        (item) => parseInt(item.price, 10) <= priceRange,
      )
    }
    const filteredByCategory = filetrByCategory(
      request.queryParams.categories,
      copy,
    )
    const sortedByPrice = sortByPrice(
      request.queryParams.sortByPrice,
      filteredByCategory,
    )
    const sortedByRating = sortByRating(star, sortedByPrice)
    const filterdByPriceRange = filterByPriceRange(priceRange, sortedByRating)
    const products = filterdByPriceRange.slice(
      (currPage - 1) * perPage,
      currPage * perPage,
    )
    return new Response(200, {}, { products })
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      },
    )
  }
  // return new Response(200, {}, { products: this.db.products })
}

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getProductHandler = function (schema, request) {
  const productId = request.params.productId
  try {
    const product = schema.products.findBy({ _id: productId })
    return new Response(200, {}, { product })
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      },
    )
  }
}
