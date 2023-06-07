import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../context/AuthContext'
import Card from '../../../components/card/Card'
import { getWishlistData } from '../../../api/wishlist'
import styled from 'styled-components'
import { H1 } from '../../../styles'
import Empty from '../../../components/animations/Loaders/Empty'

const StyledWishlist = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2%;
  flex-flow: row wrap;
  @media (min-width: 550px) {
    > figure {
      flex-basis: 47%;
    }
  }
  @media (min-width: 900px) {
    > figure {
      flex-basis: 23%;
    }
  }
`

const WishlistProducts = () => {
  const { token } = useAuth()
  const getwishlistQuery = useQuery(['wishlist', token], getWishlistData)
  return (
    <>
      {getwishlistQuery.data?.length <= 0 || !getwishlistQuery.data ? (
        <>
          <H1>Your Wishlist is Empty</H1>
          <Empty />
        </>
      ) : (
        <StyledWishlist>
          {getwishlistQuery.data?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </StyledWishlist>
      )}
    </>
  )
}
export default WishlistProducts
