import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
// import { Button } from '../buttons/Primary'

import { StyledHeroImg } from '../../../../styles/HeroImgStyles'
import shoe from '../../../../assets/images/casualT1.jpg'

const Hero = () => (
  <StyledHeroImg>
    <div>
      <div>
        <h1>Shoe Case</h1>
        <div>
          <Attention />
          <Link to="/product">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <h2>The best shoes for the best people</h2>
    </div>
  </StyledHeroImg>
)

export default Hero
