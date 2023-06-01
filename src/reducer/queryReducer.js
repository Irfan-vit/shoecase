import { categories } from '../api/categories'

const initialQueryState = {
  categories: [],
  pagination: {
    currPage: 0,
  },
  sortByPrice: {
    highTolow: false,
    lowToHigh: false,
  },
}

const CATEGORY = 'categories'
const PAGINATION = 'pagination'
const SORTBYPRICE = 'sortByPrice'

const queryReducer = (state, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      }
    case PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currPage: action.payload,
        },
      }
    case SORTBYPRICE:
      return {
        ...state,
        sortByPrice: { ...state.sortByPrice, ...action.payload },
      }
    default:
      throw new Error('Something wrong occured in filter dispatch')
  }
}

export { initialQueryState, queryReducer }
