import { useAuth } from '../../context/AuthContext'
import { useQueryClient } from '@tanstack/react-query'
import { addtoWishlist, removeFromWishlist } from '../../api/wishlist'
import { removeFromCart, updateCartItemQuantity } from '../../api/cart'
import useAddToWishlist from '../../hooks/useAddToWishlist'
import useRemoveFromWishlist from '../../hooks/useRemoveFromWishlist'
import useRemoveFromCart from '../../hooks/useRemoveFromCart'
import useUpdateCartItemQuantity from '../../hooks/useUpdateCartItemQuantity'
import Success from '../animations/Loaders/Success'
import Delete from '../animations/Loaders/Delete'
import { Button } from '../buttons/Primary'
import { FaTrash } from 'react-icons/fa'
import { TbHeartPlus, TbHeartMinus } from 'react-icons/tb'
import {
  StyledCartImage,
  StyledCartCardWrapper,
  StyledQuantity,
} from '../../styles/index'

const CartCard = ({ product }) => {
  const _id = product._id
  const { token } = useAuth()
  const queryClient = useQueryClient()
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
          <Button
            onClick={() => {
              cartItemQuantityMutation.mutate({
                _id,
                token,
                type: 'increment',
              })
            }}
          >
            +
          </Button>
          <p>
            {product.qty}
            {cartItemQuantityMutation.isLoading ? '...' : null}
          </p>
          <Button
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
          </Button>
        </StyledQuantity>
        <span
          onClick={() => {
            removeFromCartMutation.mutate({ _id, token })
          }}
        >
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
