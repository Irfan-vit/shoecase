import { useContext, createContext } from 'react'
import {Pro}

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
