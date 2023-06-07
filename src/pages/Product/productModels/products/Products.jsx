import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setPage } from '../../../../reducer/productsSlice'
import useProductsData from '../../../../hooks/useProductsData'

import Card from '../../../../components/card/Card'
import { Button } from '../../../../components/buttons/Primary'
import { FaCaretSquareRight, FaCaretSquareLeft } from 'react-icons/fa'
import { useUserData } from '../../../../context/UserDataContext'

import { StyledProducts, StyledPagination } from '../../../../styles/index'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

const Products = () => {
  const { currentpage, setcurrentpage } = useUserData()
  const currPage = useSelector((state) => state.productsReducer)
  const { productsQuery } = useProductsData(
    useSelector((state) => state.productsReducer),
  )
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.productsReducer)
  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery(['products', currentState], () =>
      dispatch(setPage(currentpage + 1)),
    )
  }, [currentState, queryClient, dispatch, currentpage])
  useEffect(() => {
    dispatch(setPage(currentpage))
  }, [currentpage, dispatch])
  return (
    productsQuery.isSuccess && (
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
              disabled={currPage.pagination.page === 1}
              onClick={() => setcurrentpage((page) => page - 1)}
            >
              <span>
                <FaCaretSquareLeft />
              </span>
            </Button>
            <p>
              {currPage.pagination.page}
              {productsQuery.isFetching ? '...' : ''}
            </p>
            <Button
              disabled={
                !productsQuery?.data ||
                productsQuery?.data?.length <= 6 ||
                productsQuery.isPreviousData ||
                currPage.pagination.page === 3 ||
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
  )
}

export default Products
