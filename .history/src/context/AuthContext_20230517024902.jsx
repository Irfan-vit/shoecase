import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = () => {
  const [token, setTocken] = useState()
  return <AuthContext.Provider value={{token, setTocken}}></AuthContext.Provider>
}
