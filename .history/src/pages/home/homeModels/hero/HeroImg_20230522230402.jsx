import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
// import { Button } from '../buttons/Primary'

import { StyledHeroImg } from '../../../../styles/index'
import Mission from '../mission/Mission'

const Hero = () => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="embla" style={{ overflow: 'hidden' }}>
      <div
        className="embla__viewport"
        ref={emblaRef}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ display: 'flex',backfaceVisibility: 'hidden'; }} className="embla__container">
          <StyledHeroImg
            className="embla__slide"
            style={{ maxWidth: '1200px' }}
          >
            <div>
              <h1>Shoe Case</h1>
              <h2>The best shoes for the best people</h2>
              <div>
                <Attention />
                <Link to="/product">
                  <button>Shop Now</button>
                </Link>
              </div>
            </div>
          </StyledHeroImg>
          <StyledHeroImg
            className="embla__slide"
            style={{ maxWidth: '1200px' }}
          >
            <div>
              <h1>Shoe Case</h1>
              <h2>The best shoes for the best people</h2>
              <div>
                <Attention />
                <Link to="/product">
                  <button>Shop Now</button>
                </Link>
              </div>
            </div>
          </StyledHeroImg>
        </div>
      </div>
    </div>
  )
}

export default Hero
