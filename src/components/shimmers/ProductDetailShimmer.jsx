import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  StyledProductDetailImageShimmer,
  StyledProductDetailShimmer,
  StyledProductDetailWrapperShimmer,
} from '../../styles/index'

const ProductDertailShimmer = () => {
  return (
    <SkeletonTheme baseColor="#e3c5f744" highlightColor="#875df12f">
      <StyledProductDetailWrapperShimmer>
        <StyledProductDetailImageShimmer>
          <Skeleton height={350} />
        </StyledProductDetailImageShimmer>
        <StyledProductDetailShimmer>
          <h2>{<Skeleton />}</h2>
          <h1>{<Skeleton height={50} />}</h1>
          <ul>
            <li>{<Skeleton />}</li>
            <li>{<Skeleton />}</li>
            <li>{<Skeleton />}</li>
            <li>{<Skeleton />}</li>
          </ul>
        </StyledProductDetailShimmer>
      </StyledProductDetailWrapperShimmer>
    </SkeletonTheme>
  )
}

export default ProductDertailShimmer
