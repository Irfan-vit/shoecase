import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setTocken] = useState()
  return (
    <AuthContext.Provider value={{ token, setTocken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export {Auth}
