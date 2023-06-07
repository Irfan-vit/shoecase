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
          <h2>Shop Based on Your Requirement</h2>
          <p>
            Shop for every occasion from our various
            <strong> Categories </strong>
            <br />
            We got your feet coverd for every situation.
          </p>
          <AttentionDown />
        </StyledPosterDetails>
      </StyledPosterWrapperReverse>
    </>
  )
}

export default CategoryPoster
