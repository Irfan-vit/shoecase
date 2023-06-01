const initialData = {
  cart: {
    addProduct: null,
  },
}
const ADDPRODUCT = 'addProduct'
const dataReducer = (state, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return { ...state, cart: { ...state.cart, addProduct: action.payload } }
    default:
      throw new Error('Something wrong occured in dispatch')
  }
}

export { initialData, dataReducer }
