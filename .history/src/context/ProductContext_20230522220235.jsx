import { useContext, createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { products } from '../api/products'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const getProducts = useQuery(['products'], products)
  const featuredProducts = getProducts?.data?.map
  return (
    <ProductContext.Provider value={{ getProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
