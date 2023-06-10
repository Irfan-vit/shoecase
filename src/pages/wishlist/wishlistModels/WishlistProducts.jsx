import { useQuery } from '@tanstack/react-query'
import { getWishlistData } from '../../../api/wishlist'
import { useAuth } from '../../../context/AuthContext'
import Card from '../../../components/card/Card'
import { H1 } from '../../../styles/index'
import Empty from '../../../components/animations/Loaders/Empty'
import { StyledWishlist } from '../../../styles/index'

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
