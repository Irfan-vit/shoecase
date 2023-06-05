import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
import { Button } from '../../../../components/buttons/Primary'

import { StyledHeroImg } from '../../../../styles/HeroImgStyles'

const Hero = () => (
  <StyledHeroImg>
    <div>
      <div>
        <h1>Shoe Case</h1>
        <div>
          <Attention />
          <Link to="/product">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
      <h2>The best shoes for the best people</h2>
    </div>
  </StyledHeroImg>
)

export default Hero
