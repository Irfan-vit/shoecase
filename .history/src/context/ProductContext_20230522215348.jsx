import { useContext, createContext } from 'react'
import {}

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
