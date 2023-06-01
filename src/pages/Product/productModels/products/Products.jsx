import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setPage } from '../../../../reducer/productsSlice'
import useProductsData from '../../../../hooks/useProductsData'
import { useAuth } from '../../../../context/AuthContext'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

import Card from '../../../../components/card/Card'
import ProductShimmer from '../../../../components/shimmers/ProductShimmer'

import { StyledProducts, StyledProductDetails } from '../../../../styles/index'


const addtocart = async ({ product, token }) => {
  console.log(product, token)
  const res = await axios.post(
    `/api/user/cart`,
    { product },
    {
      headers: { authorization: token },
    },
  )
  return res.data.cart
}

const Products = () => {
  const currPage = useSelector((state) => state.productsReducer)
  const { productsQuery } = useProductsData(
    useSelector((state) => state.productsReducer),
  )
  const dispatch = useDispatch()
  return (
    <div>
      <StyledProductDetails>
        <div>
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
        </div>
      </StyledProductDetails>
      <button onClick={() => dispatch(setPage('inc'))}>nextPage</button>
      <span>{currPage.pagination.page}</span>
      <button onClick={() => dispatch(setPage('dec'))}>previousPage</button>
      <StyledProducts>
        {productsQuery.isLoading &&
          productsQuery.isFetching &&
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'].forEach(() => (
            <ProductShimmer />
          ))}
        {productsQuery.isSuccess &&
          productsQuery.data?.map((product) => (
            <>
              <Card key={product._id} product={product} />
            </>
          ))}
      </StyledProducts>
    </div>
  )
}

export default Products
