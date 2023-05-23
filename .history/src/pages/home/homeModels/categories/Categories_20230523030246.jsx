import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  > a {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: space-between;
    gap: 1%;
  }
  > a > div {
    flex-basis: 99%;
    height: 20rem;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 868px) {
    > a > div {
      height: 20rem;
      flex-basis: 49%;
      margin: 1% 0;
    }
  }
`

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <Link>
            <div
              key={product._id}
              style={{ backgroundImage: `url(${product.imgSrc})` }}
            ></div>
          </Link>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
