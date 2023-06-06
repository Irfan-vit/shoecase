import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setPage } from '../../../../reducer/productsSlice'
import useProductsData from '../../../../hooks/useProductsData'

import Card from '../../../../components/card/Card'
import { Button } from '../../../../components/buttons/Primary'
import { FaCaretSquareRight, FaCaretSquareLeft } from 'react-icons/fa'

import { StyledProducts, StyledPagination } from '../../../../styles/index'

const Products = () => {
  const currPage = useSelector((state) => state.productsReducer)
  const { productsQuery } = useProductsData(
    useSelector((state) => state.productsReducer),
  )
  const dispatch = useDispatch()
  return (
    <div>
      {/* <StyledProductDetails> */}
      {/* <div>
        <p>Home</p>
        <h2>All</h2>
      </div>

      <div>
        <ul>
          {currPage.categories?.map((item) => (
            <li>{item}</li>
          ))}
          {currPage.sort?.byPrice ? <li>{currPage.sort?.byPrice}</li> : null}
        </ul>
      </div> */}
      {/* </StyledProductDetails> */}

      <StyledProducts>
        {productsQuery.isSuccess &&
          productsQuery.data?.map((product) => (
            <>
              <Card key={product._id} product={product} />
            </>
          ))}
      </StyledProducts>
      <StyledPagination>
        <Button onClick={() => dispatch(setPage('dec'))}>
          <span>
            <FaCaretSquareLeft />
          </span>
        </Button>
        <span>{currPage.pagination.page}</span>
        <Button onClick={() => dispatch(setPage('inc'))}>
          <span>
            <FaCaretSquareRight />
          </span>
        </Button>
      </StyledPagination>
    </div>
  )
}

export default Products
