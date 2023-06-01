import { Div, StyledLOttie, StyledTitle, H1 } from '../../styles/index'
import LottieCategory from '../animations/titleAnimations/LottieCategory'

const CategoryTitle = ({ heading }) => {
  return (
    <Div>
      <StyledLOttie>
        <LottieCategory />
      </StyledLOttie>
      <StyledTitle>
        <H1>{heading}</H1>
      </StyledTitle>
    </Div>
  )
}

export default CategoryTitle
