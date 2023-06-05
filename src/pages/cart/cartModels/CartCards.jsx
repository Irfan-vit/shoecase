import Empty from '../../../components/animations/Loaders/Empty'
import CartCard from '../../../components/card/CartCard'

import { StyledCartCardsWrapper } from '../../../styles/index'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../context/AuthContext'
import { getCart } from '../../../api/cart'

const CartCards = () => {
  const { token } = useAuth()
  const getCartQuery = useQuery(['getCart', token], getCart)
  const data = getCartQuery.data
  return (
    <>
      <StyledCartCardsWrapper>
        {data?.length <= 0 || !data ? (
          <div>
            <Empty />
          </div>
        ) : (
          data.map((product) => (
            <CartCard product={product} key={product._id} />
          ))
        )}
      </StyledCartCardsWrapper>
    </>
  )
}

export default CartCards
