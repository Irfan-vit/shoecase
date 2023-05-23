import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-between;
  gap: 1%;
  > div {
    flex-basis: 99%;
    height: 30rem;
    background-repeat: no-repeat;
    min-height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 868px) {
    > div {
      flex-basis: 49%;
      margin: 1% 0;
    }
  }
`

// const StyledSquare = styled.div`
//   margin: 100px 0;
//   height: 300px;
//   overflow: hidden;
//   transform: rotate(-45deg) scale(0.7);
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
// `

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <div
            key={product._id}
            style={{ backgroundImage: `url(${product.imgSrc})` }}
          ></div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
