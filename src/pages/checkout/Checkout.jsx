import Shipping from './checkoutModels/Shipping'
import Order from './checkoutModels/Order'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledCheckout = styled.div`
  display: flex;
  flex-flow: column-reverse wrap;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 1200px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    > :nth-child(1) {
      flex-basis: 70%;
    }
    > :nth-child(2) {
      flex-basis: 30%;
    }
  }
`

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
