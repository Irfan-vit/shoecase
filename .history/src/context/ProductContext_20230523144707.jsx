import { useContext, createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { products } from '../api/products'
import { categories } from '../api/categories'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const getProducts = useQuery(['products'], products)
  const getCategories = useQuery(['categories'], categories)
  const featuredProducts = getProducts?.data?.filter(
    (products) => products.isFeatured,
  )
  const filteredProducts
  return (
    <ProductContext.Provider
      value={{ getProducts, featuredProducts, getCategories }}
    >
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
