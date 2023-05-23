import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1%;
  > div {
    flex-basis: 24%;
    min-height: 10rem;
    max-height: 10rem;
    background-color: red;
    border: 1px solid black;
  }
`

const Featured = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts.map()}
        <div>
          <img src="" alt="" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured
