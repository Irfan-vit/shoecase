import { useSelector } from 'react-redux'
import useProductsData from '../../hooks/useProductsData'
import Products from './productModels/products/Products'
import SideBar from './productModels/sideBar/SideBar'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/navBar/Nav'
import ProductShimmer from '../../components/shimmers/ProductShimmer'
import { StyledProductsWrapper } from '../../styles/index'

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
