import { useContext, createContext } from 'react'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

const useProduct