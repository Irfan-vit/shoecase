import featuredPoster from '../../assets/images/poster.jpg'
import {
  StyledPosterWrapper,
  StyledPosterImageWrapper,
  StyledPosterDetails,
} from '../../styles'
import AttentionDown from '../animations/HeroAnimations/AttentionDown'
const FeaturedPoster = () => {
  return (
    <>
      <StyledPosterWrapper>
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
      </StyledPosterWrapper>
    </>
  )
}

export default FeaturedPoster
