import { useNavigate } from 'react-router-dom'
// import { useFilterProducts } from '../../context/filterProductsContext'
import { StyledSelect } from '../../styles/index'
import { Link } from 'react-router-dom'

const Select = () => {
  // const { filterDispatch, filterState } = useFilterProducts()
  const navigate = useNavigate()
  return (
    <form action="">
      <label
        htmlFor="categories"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <StyledSelect name="categories" id="categories">
          <option value="select">
            <Link
              onClick={() => {
                // filterDispatch({ type: 'reset' })
                navigate('/product')
              }}
            >
              Go To Products
            </Link>
          </option>
          <option value="casual">
            <Link
              onClick={() => {
                // filterDispatch({ type: 'casual' })
                navigate('/product')
              }}
            >
              Casual
            </Link>
          </option>
          <option value="fitness">
            <Link
              onClick={() => {
                navigate('/product')
                // filterDispatch({ type: 'fitness' })
              }}
            >
              Fitness
            </Link>
          </option>
          <option value="track">
            <Link
              onClick={() => {
                navigate('/product')
                // filterDispatch({ type: 'track' })
              }}
            >
              Track
            </Link>
          </option>
          <option value="sports">
            <Link
              onClick={() => {
                navigate('/product')
                // filterDispatch({ type: 'sports' })
              }}
            >
              Sports
            </Link>
          </option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select
