import Nav from '../../components/navBar/Nav'
import CartCards from './cartModels/CartCards'
import CartSummary from './cartModels/CartSummary'
import { StyledCartWrapper } from '../../styles'
const Cart = () => {
  return (
    <>
      <Nav/>
      <StyledCartWrapper>
        <CartSummary />
        <CartCards />
      </StyledCartWrapper>
    </>
  )
}

export default Cart
