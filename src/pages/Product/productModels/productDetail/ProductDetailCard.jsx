import { Button } from '../../../../components/buttons/Primary'
import useAddToCart from '../../../../hooks/useAddToCart'
import {
  StyledProductDetailImage,
  StyledProductDetail,
} from '../../../../styles/index'
import { useAuth } from '../../../../context/AuthContext'
import { addtocart } from '../../../../api/cart'
import { useQueryClient } from '@tanstack/react-query'

const ProductDetailCard = ({ props }) => {
  const { token } = useAuth()
  const { addToCartMutation } = useAddToCart(addtocart, token)
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
  const product = { ...props }
  return (
    <>
      <StyledProductDetailImage>
        <img src={props.imgSrc} alt="" />
        <div>
          <span>heart</span>
        </div>
      </StyledProductDetailImage>
      <StyledProductDetail>
        <h2>{props.title}</h2>
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
            <Button>Go to Cart</Button>
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
