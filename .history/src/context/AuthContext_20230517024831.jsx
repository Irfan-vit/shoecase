import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = () => {
  return <AuthContext.Provider value={{}}></AuthContext.Provider>
}
