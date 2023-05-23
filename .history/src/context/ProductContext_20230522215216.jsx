import { useContext, createContext } from 'react'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  ;<ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
}
