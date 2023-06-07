import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
  toggleSortByPrice,
  toggleSortByRating,
  toggleFilterByPriceRange,
  toggleCategories,
  clear,
} from '../../../../reducer/productsSlice'
import useCategoriesData from '../../../../hooks/useCategoriesData'
import SideNavToggle from '../../../../components/animations/Floats/SideNavToggle'
import SideNavClose from '../../../../components/animations/Floats/SideNavClose'
import {
  StyledSideToggle,
  StyledFormHeader,
  StyledForm,
  StyledAside,
  StyledSideToggleClose,
  Hr,
} from '../../../../styles/index'

const SideBar = () => {
  const categoriesQuery = useCategoriesData()
  const dispatch = useDispatch()
  const productsState = useSelector((state) => state.productsReducer)
  if (categoriesQuery.isLoading) return null
  return (
    <>
      <StyledSideToggle href="#main-menu">
        <SideNavToggle />
      </StyledSideToggle>
      <StyledAside id="main-menu">
        <ul>
          <StyledFormHeader>
            <h4>Form</h4>
            <h4>
              <button
                onClick={() => {
                  dispatch(clear())
                }}
              >
                Clear
              </button>
            </h4>
          </StyledFormHeader>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Ranking</h4>
              <label htmlFor="filterPrice">
                <p>₹ 0 - ₹ {productsState.sort.byPriceRange}</p>
                <input
                  onChange={(e) =>
                    dispatch(
                      toggleFilterByPriceRange(e?.target?.value ?? '20000'),
                    )
                  }
                  type="range"
                  value={productsState.sort.byPriceRange}
                  min="0"
                  max="20000"
                />
              </label>
            </StyledForm>
          </li>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Price</h4>
              <label htmlFor="sortPrice">
                <input
                  type="radio"
                  checked={
                    productsState.sort.byPrice === 'highToLow' ? true : false
                  }
                  onChange={() => {
                    dispatch(toggleSortByPrice('highToLow'))
                  }}
                />
                <span>High to Low</span>
              </label>
              <label htmlFor="sortPrice">
                <input
                  type="radio"
                  checked={
                    productsState.sort.byPrice === 'lowToHigh' ? true : false
                  }
                  onChange={() => {
                    dispatch(toggleSortByPrice('lowToHigh'))
                  }}
                />
                <span>Low to High</span>
              </label>
            </StyledForm>
          </li>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Category</h4>
              {categoriesQuery?.data.map((category) => (
                <label htmlFor="" key={category._id}>
                  <input
                    type="checkbox"
                    checked={productsState.categories.includes(
                      category.categoryName,
                    )}
                    onChange={() => {
                      dispatch(toggleCategories(`${category.categoryName}`))
                    }}
                  />
                  <span>{category.categoryName}</span>
                </label>
              ))}
            </StyledForm>
          </li>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Ranking</h4>
              {[4, 3, 2, 1].map((star) => (
                <label htmlFor="sortPrice" key={star}>
                  <input
                    type="radio"
                    checked={
                      parseInt(productsState.sort.byRating, 10) ===
                      parseInt(star, 10)
                        ? true
                        : false
                    }
                    onChange={() => {
                      dispatch(toggleSortByRating(star))
                    }}
                  />
                  <span>{star} and above</span>
                </label>
              ))}
            </StyledForm>
          </li>
          <li>
            <StyledSideToggleClose href="#">
              <SideNavClose />
            </StyledSideToggleClose>
          </li>
        </ul>
      </StyledAside>
    </>
  )
}
export default SideBar
