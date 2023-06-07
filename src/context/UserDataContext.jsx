import { createContext, useContext, useReducer, useState } from 'react'
import { initialData, dataReducer } from '../dataReducer/userDataReducer'
const UserDataContext = createContext()

const UserDataProvider = ({ children }) => {
  const [userData, userDispatch] = useReducer(dataReducer, initialData)
  const [currentpage, setcurrentpage] = useState(1)
  return (
    <UserDataContext.Provider
      value={{ userData, userDispatch, currentpage, setcurrentpage }}
    >
      {children}
    </UserDataContext.Provider>
  )
}

const useUserData = () => useContext(UserDataContext)

export { UserDataProvider, useUserData }
