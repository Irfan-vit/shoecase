import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 50v;
  > div {
    /* margin: 100px 0; */
    height: 300px;
    /* overflow: hidden; */
    transform: rotate(-45deg) scale(0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 50%;
  }
  @media (min-width: 550px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    > div {
      flex-basis: 49%;
    }
  }
  @media (min-width: 868px) {
    > div {
      flex-basis: 24%;
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
