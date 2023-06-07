import { useSelector } from 'react-redux'
import Products from './productModels/products/Products'
import SideBar from './productModels/sideBar/SideBar'
import Footer from '../../components/footer/Footer'

import { StyledProductsWrapper } from '../../styles/index'
import Nav from '../../components/navBar/Nav'
import useProductsData from '../../hooks/useProductsData'
import ProductShimmer from '../../components/shimmers/ProductShimmer'

const Product = () => {
  const { productsQuery } = useProductsData(
    useSelector((state) => state.productsReducer),
  )
  return (
    <>
      <Nav />
      <StyledProductsWrapper>
        <SideBar />
        {productsQuery.isLoading ? <ProductShimmer /> : <Products />}
      </StyledProductsWrapper>

      <Footer />
    </>
  )
}

export default Product
