import { Div, StyledLOttie, StyledTitle, H1 } from '../../styles/index'
import LottieFeatured from '../animations/titleAnimations/LottieFeatured'

const FeaturedTitle = ({ heading }) => {
  return (
    <Div>
      <StyledLOttie>
        <LottieFeatured />
      </StyledLOttie>
      <StyledTitle>
        <H1>{heading}</H1>
      </StyledTitle>
    </Div>
  )
}

export default FeaturedTitle
