import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  max-width: 800px;
  > div {
    transform: rotate(-45deg) scale(0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /* margin: 100px 10px; */
    position: absolute;
  }

  @media (min-width: 550px) {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    > div {
      flex-basis: 49%;
    }
    :nth-child(1) {
      top: 25%;
      left: 10%;
      height: 300px;
      width: 300px;
    }
    :nth-child(2) {
      top: 25%;
      left: 52%;
      height: 300px;
      width: 300px;
    }
    :nth-child(3) {
      top: 6%;
      left: 31%;
      height: 300px;
      width: 300px;
    }
    :nth-child(4) {
      top: 44%;
      left: 31%;
      height: 300px;
      width: 300px;
    }
  }
  @media (min-width: 868px) {
    > div {
      flex-basis: 24%;
      transform: rotate(-46deg) scale(1);
      :hover {
        transform: rotate(-46deg) scale(1);
      }
    }
    :nth-child(1) {
      top: 35%;
      left: 2%;
      height: 300px;
      width: 300px;
    }
    :nth-child(2) {
      top: 34%;
      left: 60%;
      height: 300px;
      width: 300px;
    }
    :nth-child(3) {
      top: 10%;
      left: 31%;
      height: 300px;
      width: 300px;
    }
    :nth-child(4) {
      top: 59%;
      left: 32%;
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
