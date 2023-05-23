import SideNavToggle from '../../../'
import SideNavClose from '../animations/Floats/SideNavClose'

import { useFilterProducts } from '../../context/filterProductsContext'

import {
  StyledSideToggle,
  StyledFormHeader,
  StyledForm,
  StyledAside,
  StyledSideToggleClose,
  Hr,
} from './SideBarStyles'

const SideBar = () => {
  const { filterDispatch, filterState } = useFilterProducts()
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
              <a onClick={() => filterDispatch({ type: 'reset' })}>Clear</a>
            </h4>
          </StyledFormHeader>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Price</h4>
              <label htmlFor="sortPrice">
                <input
                  className="form-checkbox-field"
                  type="radio"
                  name="sort"
                  value="HIGH_TO_LOW_PRICE"
                  checked={filterState.sortBy === 'HIGH_TO_LOW' ? true : false}
                  onChange={() => filterDispatch({ type: 'HIGH_TO_LOW' })}
                />
                <span>High to Low</span>
              </label>
              <label htmlFor="sortPrice">
                <input
                  className="form-checkbox-field"
                  type="radio"
                  name="sort"
                  value="LOW_TO_HIGH_PRICE"
                  checked={filterState.sortBy === 'LOW_TO_HIGH' ? true : false}
                  onChange={() => filterDispatch({ type: 'LOW_TO_HIGH' })}
                />
                <span>Low to High</span>
              </label>
            </StyledForm>
          </li>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Category</h4>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  checked={filterState.track}
                  onChange={() => filterDispatch({ type: 'track' })}
                />
                <span>Track</span>
              </label>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  checked={filterState.sports}
                  onChange={() => filterDispatch({ type: 'sports' })}
                />
                <span>Sports</span>
              </label>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  checked={filterState.casual}
                  onChange={() => filterDispatch({ type: 'casual' })}
                />
                <span>Casual</span>
              </label>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  checked={filterState.fitness}
                  onChange={() => filterDispatch({ type: 'fitness' })}
                />
                <span>Fitness</span>
              </label>
            </StyledForm>
          </li>
          <li>
            <Hr />
            <StyledForm action="">
              <h4>Sort By Ranking</h4>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={filterState.rating === 4}
                  onChange={() => {
                    filterDispatch({ type: 'rating', payload: 4 })
                  }}
                />
                <span>4 star and above</span>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={filterState.rating === 3}
                  onChange={() => {
                    filterDispatch({ type: 'rating', payload: 3 })
                  }}
                />
                <span>3 star and above</span>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={filterState.rating === 2}
                  onChange={() => {
                    filterDispatch({ type: 'rating', payload: 2 })
                  }}
                />
                <span>2 star and above</span>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={filterState.rating === 1}
                  onChange={() => {
                    filterDispatch({ type: 'rating', payload: 1 })
                  }}
                />
                <span>1 star and above</span>
              </label>
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
