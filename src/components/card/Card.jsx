import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import useCategoriesData from '../../hooks/useCategoriesData'
import {
  StyledProduct,
  StyledIconsWrapper,
  StyledFeatured,
} from '../../styles/CardStyles'
import {
  MdOutlineAddShoppingCart,
  MdOutlineShoppingCartCheckout,
} from 'react-icons/md'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb'
import { useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../../context/AuthContext'
import Success from '../animations/Loaders/Success'
import useAddToCart from '../../hooks/useAddToCart'
import { addtocart } from '../../api/cart'
import useAddToWishlist from '../../hooks/useAddToWishlist'
import { addtoWishlist, removeFromWishlist } from '../../api/wishlist'
import useRemoveFromWishlist from '../../hooks/useRemoveFromWishlist'

const Card = ({ product }) => {
  const { token } = useAuth()
  const { addToCartMutation } = useAddToCart(addtocart, token)
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
  const categoriesQuery = useCategoriesData()
  const { addToWishlistMutation } = useAddToWishlist(addtoWishlist, token)
  const cacheWishlistData = queryClient.getQueryData(['wishlist', token])
  const { removeFromWishlistMutation } = useRemoveFromWishlist(
    removeFromWishlist,
    token,
  )
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
            {/* <Button varient="outline">View Details</Button> */}
          </figcaption>
        </Link>
        {product.isFeatured && <StyledFeatured>Featured</StyledFeatured>}
        <StyledIconsWrapper>
          {cacheData?.find((item) => item._id === product._id) ? (
            <span onClick={() => {}}>
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
