import Nav from '../../components/navBar/Nav'
import CartCards from './cartModels/CartCards'
import CartSummary from './cartModels/CartSummary'
import { H1, StyledCartWrapper } from '../../styles'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../context/AuthContext'
import { getCart } from '../../api/cart'
import Empty from '../../components/animations/Loaders/Empty'
const Cart = () => {
  const { token } = useAuth()
  const getCartQuery = useQuery(['getCart', token], getCart)
  return (
    <>
      <Nav />
      {getCartQuery.data?.length <= 0 || !getCartQuery.data ? (
        <>
          <H1>Your Cart is Empty</H1>
          <Empty />
        </>
      ) : (
        <StyledCartWrapper>
          <CartSummary />
          <CartCards />
        </StyledCartWrapper>
      )}
    </>
  )
}

export default Cart
