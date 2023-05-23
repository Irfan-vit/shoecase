import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledDiamond = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`

const StyledCategoryCardWrapper = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    transform: rotate(-47deg) scale(0.5);
    margin: 0 auto;
    > div {
      height: 500px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      flex-basis: 48%;
      margin: 1%;
    }
  }
  @media (min-width: 1110px) {
    display: flex;
    flex-flow: row wrap;
    transform: rotate(-46deg) scale(0.6);
    margin: 0 auto;
    > div {
      height: 550px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      flex-basis: 48%;
      margin: 1%;
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
      <StyledDiamond>
        <StyledCategoryCardWrapper>
          {featuredProducts?.map((product) => (
            <div
              key={product._id}
              style={{ backgroundImage: `url(${product.imgSrc})` }}
            ></div>
          ))}
        </StyledCategoryCardWrapper>
      </StyledDiamond>
    </>
  )
}

export default Categories
