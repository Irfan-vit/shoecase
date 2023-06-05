import { createContext, useContext, useReducer } from 'react'
import { initialData, dataReducer } from '../dataReducer/userDataReducer'
const UserDataContext = createContext()

const UserDataProvider = ({ children }) => {
  const [userData, userDispatch] = useReducer(dataReducer, initialData)
  return (
    <UserDataContext.Provider value={{ userData, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  )
}

const useUserData = () => useContext(UserDataContext)

export { UserDataProvider, useUserData }
