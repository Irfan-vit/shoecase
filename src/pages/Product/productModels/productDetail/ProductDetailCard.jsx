import {
  StyledProductDetailImage,
  StyledProductDetail,
} from '../../../../styles/index'

const ProductDetailCard = ({ props }) => {
  return (
    <>
      <StyledProductDetailImage>
        <img src={props.imgSrc} alt="" />
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
      </StyledProductDetail>
    </>
  )
}

export default ProductDetailCard
