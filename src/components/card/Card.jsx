import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import useCategoriesData from '../../hooks/useCategoriesData'
import { StyledProduct, StyledIconsWrapper } from '../../styles/CardStyles'
import { getCart, addToCart, removeFromCart } from '../../api/cart'
import {
  MdOutlineAddShoppingCart,
  MdOutlineShoppingCartCheckout,
  MdFavoriteBorder,
  MdOutlineHeartBroken,
} from 'react-icons/md'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { render } from 'react-dom'
import Success from '../animations/Loaders/Success'

const addtocart = async ({ product, token }) => {
  console.log(product, token, 'inisde mutation')
  const res = await toast.promise(
    axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: { authorization: token },
      },
    ),
    {
      pending: 'Adding To Cart',
      success: {
        render({ data }) {
          const added = JSON.parse(data.request.requestBody)
          console.log(added)
          return `added to ${added.product.title} To cart`
        },
      },
      error: 'Promise rejected 🤯',
    },
  )
  return res.data.cart
}

const Card = ({ product }) => {
  const { token } = useAuth()
  const addToCartMutation = useMutation(
    addtocart,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getCart', token], (currentUser) => {
          console.log(data, currentUser, 'data')
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getCart'])
      },
    },
  )
  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData(['getCart', token])
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
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
            <Rating initialValue={product.rating} transition size={20} />
            <button varient="outline">View Details</button>
          </figcaption>
        </Link>
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
                // queryClient.invalidateQueries(['getCart'])
              }}
            >
              <MdOutlineAddShoppingCart />
            </span>
          )}
          <span>
            <MdFavoriteBorder />
          </span>
        </StyledIconsWrapper>
      </StyledProduct>
    </>
  )
}

export default Card
