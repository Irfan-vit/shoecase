import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledDiamond = styled.div`
  position: relative;
  /* height: 100vh; */
  max-width: 1200px;

  margin: 0 auto;
`

const StyledCategoryCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  transform: rotate(-46deg) scale(0.5);
  padding: 1rem;

  margin: 0 auto;
  > div {
    height: 35rem;
    width: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    flex-basis: 49%;
    padding: 1rem;
  }

  /* @media (min-width: 550px) { */
    /* margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    > div {
      flex-basis: 49%;
      transform: rotate(-45deg) scale(0.8);
      overflow: hidden;
    }
    :nth-child(1) {
      top: 25%;
      left: 8%;
      height: 300px;
      width: 300px;
    }
    :nth-child(2) {
      top: 25%;
      left: 55%;
      height: 300px;
      width: 300px;
    }
    :nth-child(3) {
      top: 6%;
      left: 31.5%;
      height: 300px;
      width: 300px;
    }
    :nth-child(4) {
      top: 44%;
      left: 31.5%;
      height: 300px;
      width: 300px;
    } */
  }
  /* @media (min-width: 868px) { */
    /* > div {
      flex-basis: 24%;
      transform: rotate(-46deg) scale(1);
      overflow: hidden;
      transition: all 0.5s ease;
    }
    > div:hover {
      transform: rotate(-46deg) scale(1.12);
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
    } */
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
