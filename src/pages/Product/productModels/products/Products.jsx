import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setPage } from '../../../../reducer/productsSlice'
import useProductsData from '../../../../hooks/useProductsData'

import Card from '../../../../components/card/Card'
import { Button } from '../../../../components/buttons/Primary'
import { FaCaretSquareRight, FaCaretSquareLeft } from 'react-icons/fa'

import { StyledProducts, StyledPagination, H1 } from '../../../../styles/index'
import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import ProductShimmer from '../../../../components/shimmers/ProductShimmer'

const Products = () => {
  const currPage = useSelector((state) => state.productsReducer)
  const { productsQuery } = useProductsData(
    useSelector((state) => state.productsReducer),
  )
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.productsReducer)
  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery(['products', currentState], () =>
      dispatch(setPage('inc')),
    )
  }, [currentState, queryClient, dispatch])
  return (
    productsQuery.isSuccess && (
      <div>
        <StyledProducts>
          {productsQuery?.data?.length === 0 ? (
            <h1>No Items</h1>
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
              onClick={() => dispatch(setPage('dec'))}
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
                productsQuery?.data?.length < 8 ||
                productsQuery.isPreviousData ||
                currPage.pagination.page === 3
              }
              onClick={() => dispatch(setPage('inc'))}
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
