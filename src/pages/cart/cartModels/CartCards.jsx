import { useQuery } from '@tanstack/react-query'
import { getCart } from '../../../api/cart'
import { useAuth } from '../../../context/AuthContext'
import CartCard from '../../../components/card/CartCard'
import { StyledCartCardsWrapper } from '../../../styles/index'

const CartCards = () => {
  const { token } = useAuth()
  const getCartQuery = useQuery(['getCart', token], getCart)
  const data = getCartQuery.data
  return (
    <>
      <StyledCartCardsWrapper>
        {data?.map((product) => (
          <CartCard product={product} key={product._id} />
        ))}
      </StyledCartCardsWrapper>
    </>
  )
}

export default CartCards
