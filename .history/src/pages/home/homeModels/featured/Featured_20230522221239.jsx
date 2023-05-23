import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 1%;
  > div {
    flex-basis: 24%;
    > img {
      /* height: 100%; */
      width: 100%;
    }
  }
`

const Featured = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <div key={product._id}>
            <img src={product.imgSrc} alt="" />
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured
