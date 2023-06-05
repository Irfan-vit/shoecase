import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../context/AuthContext'
import Card from '../../../components/card/Card'
import { getWishlistData } from '../../../api/wishlist'
import styled from 'styled-components'

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
      <StyledWishlist>
        {getwishlistQuery.data?.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </StyledWishlist>
    </>
  )
}
export default WishlistProducts
