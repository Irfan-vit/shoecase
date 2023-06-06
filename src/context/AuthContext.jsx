import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, user: null })
  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user])
  const token = user?.token
  return (
    <AuthContext.Provider value={{ user, setUser, token }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
