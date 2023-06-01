import { useParams } from 'react-router-dom'
import useProductDetailData from '../../hooks/useProductDetailData'

import NavBar from '../../components/navBar/NavBar'
import ProductDetailCard from './productModels/productDetail/ProductDetailCard'
import ProductDertailShimmer from '../../components/shimmers/ProductDetailShimmer'

import { StyledProductDetailWrapper } from '../../styles/index'

const ProductDetail = () => {
  const { productId } = useParams()
  const productDetailQuery = useProductDetailData(productId)
  return (
    <>
      <NavBar />
      <StyledProductDetailWrapper>
        {productDetailQuery.isLoading ? (
          <ProductDertailShimmer />
        ) : (
          productDetailQuery.isSuccess && (
            <ProductDetailCard props={productDetailQuery?.data} />
          )
        )}
      </StyledProductDetailWrapper>
    </>
  )
}

export default ProductDetail
