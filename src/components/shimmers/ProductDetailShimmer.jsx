import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  StyledProductDetailImageShimmer,
  StyledProductDetailShimmer,
  StyledProductDetailWrapperShimmer,
} from '../../styles/index'

const ProductDertailShimmer = () => {
  return (
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
  )
}

export default ProductDertailShimmer
