import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  @media (min-width: 550px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1;
  }
  @media (min-width: 868px) {
  }
`

const CategoryCard = styled.div`
  position: relative;
  > img {
    height: 100%;
    width: 100%;
  }
`

const Category = styled.div`
  position: relative;
  background-color: #f0f8ff5a;
  > h1 {
  }
`

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <CategoryCard>
            <img src={product.imgSrc} alt="" />
            <Category>
              <h1>{product.title}</h1>
            </Category>
          </CategoryCard>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
