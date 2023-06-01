import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    pagination: {
      page: 1,
      perPage: 8,
    },
    sort: {
      byPrice: null,
      byRating: null,
    },
    categories: [],
  },
  reducers: {
    setPage: (state, action) =>
      void (state.pagination.page =
        action.payload === 'inc'
          ? (state.pagination.page += 1)
          : action.payload === 'dec'
          ? (state.pagination.page -= 1)
          : state.pagination.page),
    setPerPage: (state, action) =>
      void (state.pagination.perPage = action.payload),
    toggleSortByPrice: (state, action) =>
      void (state.sort.byPrice = action.payload),
    toggleSortByRating: (state, action) =>
      void (state.sort.byRating = action.payload),
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
  toggleCategories,
} = productsSlice.actions

export default productsSlice.reducer
