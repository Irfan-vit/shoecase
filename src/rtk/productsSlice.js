import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pagination: {
    page: 1,
    perPage: 8,
  },
  sort: {
    byPrice: null,
    byRating: null,
    byPriceRange: 20000,
  },
  categories: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.pagination.page = action.payload
    },
    setPerPage: (state, action) =>
      void (state.pagination.perPage = action.payload),
    toggleSortByPrice: (state, action) =>
      void (state.sort.byPrice = action.payload),
    toggleSortByRating: (state, action) => {
      state.sort.byRating = action.payload
    },
    toggleFilterByPriceRange: (state, action) =>
      void (state.sort.byPriceRange = action.payload),
    clear: (state, action) => {
      return initialState
    },
    toggleCategories: (state, action) =>
      void (state.categories = [
        ...(state.categories.includes(action.payload)
          ? state.categories.filter((category) => category !== action.payload)
          : state.categories.concat(action.payload)),
      ]),
  },
})

export const {
  setPage,
  setPerPage,
  toggleSortByPrice,
  toggleSortByRating,
  toggleFilterByPriceRange,
  toggleCategories,
  clear,
} = productsSlice.actions

export default productsSlice.reducer
