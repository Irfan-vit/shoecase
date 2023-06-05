import { Link } from 'react-router-dom'
import useProductsData from '../../../../hooks/useProductsData'
import { useSelector } from 'react-redux'
import { StyledFeaturedCardWrapper } from '../../../../styles/index'
import FeaturedTitle from '../../../../components/headings/FeaturedTitle'
import FeaturedPoster from '../../../../components/poster/FeaturedPoster'

const Featured = () => {
  const productsState = useSelector((state) => state.productsReducer)
  const { productsQuery } = useProductsData(productsState)
  const featuredProducts = productsQuery.data?.filter(
    (products) => products.isFeatured,
  )
  return (
    <>
      <FeaturedTitle heading="Shoes we are proud of" />
      <FeaturedPoster />
      <StyledFeaturedCardWrapper>
        {featuredProducts?.map((product) => (
          <div key={product._id}>
            <Link to={`product/${product._id}`}>
              <img src={product.imgSrc} alt="" />
              <p>
                <span>₹</span>
                {product.price}
              </p>
              <h4>{product.title}</h4>
            </Link>
          </div>
        ))}
      </StyledFeaturedCardWrapper>
    </>
  )
}

export default Featured
