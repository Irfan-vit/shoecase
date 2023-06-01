import featuredPoster from '../../assets/images/poster1.jpg'
import AttentionDown from '../animations/HeroAnimations/AttentionDown'
import {
  StyledPosterImageWrapper,
  StyledPosterDetails,
  StyledPosterWrapperReverse,
} from '../../styles'
const CategoryPoster = () => {
  return (
    <>
      <StyledPosterWrapperReverse>
        <StyledPosterImageWrapper>
          <img src={featuredPoster} alt="" />
        </StyledPosterImageWrapper>
        <StyledPosterDetails>
          <h2>Products we are proud of</h2>
          <p>
            <strong>SHOE CASE's</strong> Best Selling Prodcts.Fill your closet
            with amazing shoes before they run out of stock.
          </p>
          <AttentionDown />
        </StyledPosterDetails>
      </StyledPosterWrapperReverse>
    </>
  )
}

export default CategoryPoster
