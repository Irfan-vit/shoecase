import Products from './productModels/products/Products'
import SideBar from './productModels/sideBar/SideBar'
import NavBarSearch from '../../components/navBar/NavBarSearch'
import Footer from '../../components/footer/Footer'

import { StyledProductsWrapper } from '../../styles/index'

const Product = () => {
  return (
    <>
      <NavBarSearch />
      <StyledProductsWrapper>
        <SideBar />
        <Products />
      </StyledProductsWrapper>
      <Footer />
    </>
  )
}

export default Product
