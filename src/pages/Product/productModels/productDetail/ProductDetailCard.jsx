import { Button } from '../../../../components/buttons/Primary'
import useAddToCart from '../../../../hooks/useAddToCart'
import {
  StyledProductDetailImage,
  StyledProductDetail,
} from '../../../../styles/index'
import { useAuth } from '../../../../context/AuthContext'
import { addtocart } from '../../../../api/cart'
import { useQueryClient } from '@tanstack/react-query'
import { addtoWishlist, removeFromWishlist } from '../../../../api/wishlist'
import useRemoveFromWishlist from '../../../../hooks/useRemoveFromWishlist'
import useAddToWishlist from '../../../../hooks/useAddToWishlist'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb'
import Success from '../../../../components/animations/Loaders/Success'
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from 'react-router-dom'

const ProductDetailCard = ({ props }) => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const { addToCartMutation } = useAddToCart(addtocart, token)
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
  const cacheWishlistData = queryClient.getQueryData(['wishlist', token])
  const { addToWishlistMutation } = useAddToWishlist(addtoWishlist, token)
  const { removeFromWishlistMutation } = useRemoveFromWishlist(
    removeFromWishlist,
    token,
  )
  const product = { ...props }
  return (
    <>
      <StyledProductDetailImage>
        <img src={props.imgSrc} alt="" />
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
        <h2>{props.title}</h2>
        <Rating initialValue={product.rating} transition size={20} />
        <h1>
          <span>₹</span> {props.price}
        </h1>
        <ul className="terms">
          <h3>About</h3>
          <li>
            The <strong>{props.title}</strong> shoes are suitable for
            <strong> {props.categoryName} </strong>.
          </li>
          <li>
            We guarentee the Products at <strong>Sprint Store </strong> are 100%
            Original.
          </li>
          <li>All Products brought from us are eleigible for 7 days return.</li>
        </ul>
        <div>
          {cacheData?.find((item) => item._id === props._id) ? (
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
