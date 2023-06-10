import { Link } from 'react-router-dom'
import Order from './checkoutModels/Order'
import Shipping from './checkoutModels/Shipping'
import { StyledCheckout } from '../../styles/index'

const Checkout = () => {
  return (
    <>
      <Link to="/cart">Back to Cart</Link>
      <StyledCheckout>
        <Shipping />
        <Order />
      </StyledCheckout>
    </>
  )
}
export default Checkout
