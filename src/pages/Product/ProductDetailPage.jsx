import { useParams } from 'react-router-dom'
import useProductDetailData from '../../hooks/useProductDetailData'
import Nav from '../../components/navBar/Nav'
import ProductDetailCard from './productModels/productDetail/ProductDetailCard'
import ProductDertailShimmer from '../../components/shimmers/ProductDetailShimmer'
import { StyledProductDetailWrapper } from '../../styles/index'

const ProductDetail = () => {
  const { productId } = useParams()
  const productDetailQuery = useProductDetailData(productId)
  return (
    <>
      <Nav />
      <StyledProductDetailWrapper>
        {productDetailQuery.isLoading ? (
          <ProductDertailShimmer />
        ) : (
          productDetailQuery.isSuccess && (
            <ProductDetailCard product={productDetailQuery?.data} />
          )
        )}
      </StyledProductDetailWrapper>
    </>
  )
}

export default ProductDetail
