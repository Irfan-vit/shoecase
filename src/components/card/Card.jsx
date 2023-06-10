import { Link, useNavigate } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../../context/AuthContext'
import { addtocart } from '../../api/cart'
import { addtoWishlist, removeFromWishlist } from '../../api/wishlist'
import useAddToCart from '../../hooks/useAddToCart'
import useAddToWishlist from '../../hooks/useAddToWishlist'
import useRemoveFromWishlist from '../../hooks/useRemoveFromWishlist'
import useCategoriesData from '../../hooks/useCategoriesData'
import Success from '../animations/Loaders/Success'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb'
import {
  StyledProduct,
  StyledIconsWrapper,
  StyledFeatured,
} from '../../styles/CardStyles'
import {
  MdOutlineAddShoppingCart,
  MdOutlineShoppingCartCheckout,
} from 'react-icons/md'

const Card = ({ product }) => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { addToCartMutation } = useAddToCart(addtocart, token)
  const { addToWishlistMutation } = useAddToWishlist(addtoWishlist, token)
  const { removeFromWishlistMutation } = useRemoveFromWishlist(
    removeFromWishlist,
    token,
  )
  const cacheData = queryClient.getQueryData(['getCart', token])
  const cacheWishlistData = queryClient.getQueryData(['wishlist', token])
  const categoriesQuery = useCategoriesData()
  if (categoriesQuery.isLoading) return null
  const category = categoriesQuery.data.find(
    (category) => category.categoryName === product.categoryName,
  )
  if (!category) return null
  return (
    <>
      <StyledProduct>
        <Link to={`/product/${product._id}`}>
          <div>
            <img src={product.imgSrc} alt="" />
          </div>
          <figcaption>
            <p>
              <span>₹</span>
              {product.price}
            </p>
            <h4>{product.title}</h4>
            <Rating initialValue={product.rating} transition size={20} />
          </figcaption>
        </Link>
        {product.isFeatured && <StyledFeatured>Featured</StyledFeatured>}
        <StyledIconsWrapper>
          {cacheData?.find((item) => item._id === product._id) ? (
            <span
              onClick={() => {
                navigate('/cart')
              }}
            >
              <MdOutlineShoppingCartCheckout />
            </span>
          ) : addToCartMutation.isLoading ? (
            <span>
              <Success />
            </span>
          ) : (
            <span
              onClick={() => {
                addToCartMutation.mutate({ product, token })
              }}
            >
              <MdOutlineAddShoppingCart />
            </span>
          )}
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
        </StyledIconsWrapper>
      </StyledProduct>
    </>
  )
}

export default Card
