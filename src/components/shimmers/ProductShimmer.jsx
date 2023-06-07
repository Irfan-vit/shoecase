import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  StyledProductShimmer,
  StyledProductsShimmerWrapper,
} from '../../styles/index'

const ProductShimmer = () => {
  return (
    <>
      <SkeletonTheme baseColor="#e3c5f744" highlightColor="#875df12f">
        <StyledProductsShimmerWrapper>
          {['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'].map((a, i) => (
            <StyledProductShimmer key={i}>
              <Link>
                <div>
                  <Skeleton height={'100%'} />
                </div>
                <figcaption>
                  <h3>{<Skeleton height={30} width={'70%'} />}</h3>
                  <p>{<Skeleton width={'50%'} />}</p>
                  <p>{<Skeleton width={'50%'} />}</p>
                  <Rating initialValue={0} transition size={20} />
                  <div>
                    <Skeleton width={'30%'} height={25} />
                  </div>
                </figcaption>
              </Link>
            </StyledProductShimmer>
          ))}
        </StyledProductsShimmerWrapper>
      </SkeletonTheme>
    </>
  )
}

export default ProductShimmer
