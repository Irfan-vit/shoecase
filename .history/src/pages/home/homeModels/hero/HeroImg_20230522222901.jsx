import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
// import { Button } from '../buttons/Primary'

import { StyledHeroImg } from '../../../../styles/index'
import Mission from '../mission/Mission'

const Hero = () => (
  <StyledHeroImg style={{ maxWidth: '1200px' }}>
    <div>
      <Mission />
      <div>
        <Attention />
        <Link to="/product">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  </StyledHeroImg>
)

export default Hero
