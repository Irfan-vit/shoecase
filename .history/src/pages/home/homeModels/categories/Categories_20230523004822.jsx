import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 50vh;
  > div {
    transform: rotate(-45deg) scale(0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
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
    :nth-child(1) {
      top: 31.5%;
      left: 12.5%;
      height: 300px;
      width: 300px;
    }
    :nth-child(2) {
      top: 31.5%;
      left: -12.5%;
      height: 300px;
      width: 300px;
    }
    :nth-child(3) {
      top: 55%;
      height: 300px;
      width: 300px;
    }
    :nth-child(4) {
      top: 8%;
      height: 300px;
      width: 300px;
    }
  }
  @media (min-width: 868px) {
    > div {
      flex-basis: 24%;
      transform: rotate(-45deg) scale(0.7);
    }
    :nth-child(1) {
      top: 25%;
      left: 0%;
      height: 300px;
      width: 300px;
    }
    :nth-child(2) {
      top: 25%;
      left: 25%;
      height: 300px;
      width: 300px;
    }
    :nth-child(3) {
      top: 25%;
      left: 50%;
      height: 300px;
      width: 300px;
    }
    :nth-child(4) {
      top: 25%;
      left: 75%;
      height: 300px;
      width: 300px;
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
