import Products from './productModels/products/Products'
import SideBar from './productModels/sideBar/SideBar'
import Footer from '../../components/footer/Footer'

import { StyledProductsWrapper } from '../../styles/index'
import Nav from '../../components/navBar/Nav'

const Product = () => {
  return (
    <>
      <Nav />
      <StyledProductsWrapper>
        <SideBar />
        <Products />
      </StyledProductsWrapper>

      <Footer />
    </>
  )
}

export default Product
