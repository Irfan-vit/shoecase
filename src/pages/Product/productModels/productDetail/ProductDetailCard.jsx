import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { useAuth } from '../../../../context/AuthContext'
import { addtocart } from '../../../../api/cart'
import { addtoWishlist, removeFromWishlist } from '../../../../api/wishlist'
import useAddToCart from '../../../../hooks/useAddToCart'
import useAddToWishlist from '../../../../hooks/useAddToWishlist'
import useRemoveFromWishlist from '../../../../hooks/useRemoveFromWishlist'
import Success from '../../../../components/animations/Loaders/Success'
import { Button } from '../../../../components/buttons/Primary'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb'
import {
  StyledProductDetailImage,
  StyledProductDetail,
} from '../../../../styles/index'

const ProductDetailCard = ({ product }) => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
  const cacheWishlistData = queryClient.getQueryData(['wishlist', token])
  const { addToCartMutation } = useAddToCart(addtocart, token)
  const { addToWishlistMutation } = useAddToWishlist(addtoWishlist, token)
  const { removeFromWishlistMutation } = useRemoveFromWishlist(
    removeFromWishlist,
    token,
  )
  return (
    <>
      <StyledProductDetailImage>
        <img src={product.imgSrc} alt="" />
        <div>
          {cacheWishlistData?.find((item) => item._id === product._id) ? (
            addToWishlistMutation.isLoading ||
            removeFromWishlistMutation.isLoading ? (
              <span>
                <Success />
              </span>
            ) : (
              <span
                onClick={() => {
                  removeFromWishlistMutation.mutate({ _id: product._id, token })
                }}
              >
                <TbHeartMinus />
              </span>
            )
          ) : addToWishlistMutation.isLoading ||
            removeFromWishlistMutation.isLoading ? (
            <span>
              <Success />
            </span>
          ) : (
            <span
              onClick={() => {
                addToWishlistMutation.mutate({ product, token })
              }}
            >
              <TbHeartPlus />
            </span>
          )}
        </div>
      </StyledProductDetailImage>
      <StyledProductDetail>
        <h2>{product.title}</h2>
        <Rating initialValue={product.rating} transition size={20} />
        <h1>
          <span>₹</span> {product.price}
        </h1>
        <ul className="terms">
          <h3>About</h3>
          <li>
            The <strong>{product.title}</strong> shoes are suitable for
            <strong> {product.categoryName} </strong>.
          </li>
          <li>
            We guarentee the Products at <strong>Sprint Store </strong> are 100%
            Original.
          </li>
          <li>All Products brought from us are eleigible for 7 days return.</li>
        </ul>
        <div>
          {cacheData?.find((item) => item._id === product._id) ? (
            <Button
              onClick={() => {
                navigate('/cart')
              }}
            >
              Go to Cart
            </Button>
          ) : addToCartMutation.isLoading ? (
            <Button>Adding...</Button>
          ) : (
            <Button
              onClick={() => {
                addToCartMutation.mutate({ product, token })
              }}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </StyledProductDetail>
    </>
  )
}

export default ProductDetailCard
