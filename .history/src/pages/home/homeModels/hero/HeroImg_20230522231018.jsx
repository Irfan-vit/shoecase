import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
// import { Button } from '../buttons/Primary'

import {} from '../../../../styles/index'

const Hero = () => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <styledCarouselWrapper>
      <styledCarouselViewPort>
        <styledCarouselContainer>
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
        </styledCarouselContainer>
      </styledCarouselViewPort>
    </styledCarouselWrapper>
  )
}

export default Hero
