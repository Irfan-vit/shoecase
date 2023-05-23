import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  > div {
    > img {
      height: 100%;
      width: 100%;
    }
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

const StyledSquare = styled.div`
  /* min-height: 100px; */
  display: block;
  /* margin: 0 auto; */
  margin: 100px 0;
  width: 400px;
  /* transform: rotate(45deg); */
  overflow: hidden;
  transform: rotate(-45deg) scale(0.8);
`

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <StyledSquare
            key={product._id}
            style={{ backgroundImage: `url(${product.imgSrc})` }}
          >
            {/* <img src={product.imgSrc} alt="" /> */}
          </StyledSquare>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
