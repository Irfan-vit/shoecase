import Shipping from './checkoutModels/Shipping'
import Order from './checkoutModels/Order'

import styled from 'styled-components'
const StyledCheckout = styled.div`
  display: flex;
  flex-flow: column-reverse wrap;
  @media (min-width: 768px) {
    flex-flow: row wrap;
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
      <StyledCheckout>
        <Shipping />
        <Order />
      </StyledCheckout>
    </>
  )
}
export default Checkout
