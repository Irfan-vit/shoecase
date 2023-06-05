import {
  StyledCartImage,
  StyledCartCardWrapper,
  StyledQuantity,
} from '../../styles/index'
import { useAuth } from '../../context/AuthContext'
import { useQueryClient } from '@tanstack/react-query'
import { FaTrash } from 'react-icons/fa'
import Delete from '../animations/Loaders/Delete'
import { removeFromCart, updateCartItemQuantity } from '../../api/cart'
import useRemoveFromCart from '../../hooks/useRemoveFromCart'
import useUpdateCartItemQuantity from '../../hooks/useUpdateCartItemQuantity'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb'
import useAddToWishlist from '../../hooks/useAddToWishlist'
import { addtoWishlist } from '../../api/wishlist'
import useRemoveFromWishlist from '../../hooks/useRemoveFromWishlist'
import { removeFromWishlist } from '../../api/wishlist'
import Success from '../animations/Loaders/Success'

const CartCard = ({ product }) => {
  const _id = product._id
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
  const { removeFromCartMutation } = useRemoveFromCart(removeFromCart, token)
  const { cartItemQuantityMutation } = useUpdateCartItemQuantity(
    updateCartItemQuantity,
    token,
  )
  const { addToWishlistMutation } = useAddToWishlist(addtoWishlist, token)
  const { removeFromWishlistMutation } = useRemoveFromWishlist(
    removeFromWishlist,
    token,
  )
  const cacheWishlistData = queryClient.getQueryData(['wishlist', token])
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div>
          <img src={product.imgSrc} alt="" />
        </div>
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
      </StyledCartImage>
      <div>
        <h4>{product.title}</h4>
        <span>{product.price}</span>
        <StyledQuantity>
          <button
            onClick={() => {
              cartItemQuantityMutation.mutate({
                _id,
                token,
                type: 'increment',
              })
            }}
          >
            +
          </button>
          <p>
            {product.qty}
            {cartItemQuantityMutation.isLoading ? '...' : null}
          </p>
          <button
            disabled={product.qty <= 1}
            onClick={() => {
              cartItemQuantityMutation.mutate({
                _id,
                token,
                type: 'decrement',
              })
            }}
          >
            -
          </button>
        </StyledQuantity>
        <span
          onClick={() => {
            removeFromCartMutation.mutate({ _id, token })
          }}
        >
          {/* {removeFromCartMutation.isLoading ? <Delete /> : <FaTrash />} */}
          {removeFromCartMutation.isIdle || removeFromCartMutation.isSuccess ? (
            <FaTrash />
          ) : removeFromCartMutation.isLoading ? (
            <Delete />
          ) : removeFromCartMutation.isError ? (
            <p>error</p>
          ) : null}
        </span>
      </div>
    </StyledCartCardWrapper>
  )
}

export default CartCard
