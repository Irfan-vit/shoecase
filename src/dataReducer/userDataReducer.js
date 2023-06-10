const initialData = {
  address: [],
  currentAddress: null,
}
const ADDADDRESS = 'addAddress'
const EDITADDRESS = 'editAddress'
const CURRENTADDRESS = 'currentAddress'
const REMOVEADDRESS = 'removeAddress'
const dataReducer = (state, action) => {
  switch (action.type) {
    case ADDADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload],
      }
    case EDITADDRESS:
      console.log(action.payload)
      return {
        ...state,
        address: state.address.map((add) =>
          add.id === action.payload.tag ? action.payload : add,
        ),
      }
    case CURRENTADDRESS:
      return {
        ...state,
        currentAddress: state.address.find(
          (address) => address.id === action.payload,
        ),
      }
    case REMOVEADDRESS:
      console.log(state.address.filter((add) => add.id === action.payload))
      return {
        ...state,
        address: state.address.filter((add) => add.id !== action.payload),
        currentAddress:
          state.currentAddress.id === action.payload
            ? null
            : state.currentAddress,
      }
    default:
      throw new Error('Something wrong occured in dispatch')
  }
}

export { initialData, dataReducer }
