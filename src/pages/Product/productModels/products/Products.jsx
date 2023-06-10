import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setPage } from '../../../../rtk/productsSlice'
import { useUserData } from '../../../../context/UserDataContext'
import useProductsData from '../../../../hooks/useProductsData'
import Card from '../../../../components/card/Card'
import { Button } from '../../../../components/buttons/Primary'
import { FaCaretSquareRight, FaCaretSquareLeft } from 'react-icons/fa'
import { StyledProducts, StyledPagination } from '../../../../styles/index'

const Products = () => {
  const dispatch = useDispatch()
  const { currentpage, setcurrentpage } = useUserData()
  const currentState = useSelector((state) => state.productsReducer)
  const page = currentState.pagination.page
  const { productsQuery } = useProductsData(currentState)
  useEffect(() => {
    dispatch(setPage(currentpage))
  }, [currentpage, dispatch])
  return (
    <div>
      <StyledProducts>
        {productsQuery?.data?.length === 0 ? (
          <h1>No Products Found...</h1>
        ) : (
          productsQuery.data?.map((product) => (
            <>
              <Card key={product._id} product={product} />
            </>
          ))
        )}
      </StyledProducts>
      {productsQuery?.data?.length > 0 && (
        <StyledPagination>
          <Button
            disabled={page === 1}
            onClick={() => setcurrentpage((page) => page - 1)}
          >
            <span>
              <FaCaretSquareLeft />
            </span>
          </Button>
          <p>
            {page}
            {productsQuery.isFetching ? '...' : null}
          </p>
          <Button
            disabled={
              !productsQuery?.data ||
              productsQuery?.data?.length <= 6 ||
              productsQuery.isPreviousData ||
              page === 3 ||
              productsQuery?.data === []
            }
            onClick={() => setcurrentpage((page) => page + 1)}
          >
            <span>
              <FaCaretSquareRight />
            </span>
          </Button>
        </StyledPagination>
      )}
    </div>
  )
}

export default Products
