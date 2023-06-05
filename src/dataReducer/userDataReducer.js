const initialData = {
  address: [],
}
const ADDADDRESS = 'addAddress'
const EDITADDRESS = 'editAddress'
const dataReducer = (state, action) => {
  switch (action.type) {
    case ADDADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload],
      }
    case EDITADDRESS:
      return {
        ...state,
        address: [
          ...state.address.filter((address) =>
            address.id === action.payload.id ? action.payload.address : address,
          ),
        ],
      }
    default:
      throw new Error('Something wrong occured in dispatch')
  }
}

export { initialData, dataReducer }
