import { StyledCartImage, StyledCartCardWrapper } from '../../styles/index'

const removeFromCart = async ({ product, token }) => {
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

const CartCard = ({
  _id,
  title,
  price,
  categoryName,
  imgSrc,
  rating,
  inCart,
}) => {
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div>
          <img src={imgSrc} alt="" />
        </div>
      </StyledCartImage>
      <div>
        <h4>{title}</h4>
        <span>{price}</span>
        <div>
          <p>+</p>
          <span> Qty(1)</span>
          <p>-</p>
        </div>
        <span>remove</span>
      </div>
    </StyledCartCardWrapper>
  )
}

export default CartCard
