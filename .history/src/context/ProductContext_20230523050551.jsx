import { useContext, createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { products } from '../api/products'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const getProducts = useQuery(['products'], products)
  cont 
  const featuredProducts = getProducts?.data?.filter(
    (products) => products.isFeatured,
  )
  return (
    <ProductContext.Provider value={{ getProducts, featuredProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
