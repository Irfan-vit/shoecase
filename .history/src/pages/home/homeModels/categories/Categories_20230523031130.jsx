import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-between;
  gap: 1%;
  > div {
    position: relative;
    flex-basis: 99%;
    height: 20rem;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 868px) {
      height: 20rem;
      flex-basis: 49%;
      margin: 1% 0;
    }
  }
`

const Category = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #f0f8ff5a;
  height: 100%;
  width: 100%;
`

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          // 
          <div
            key={product._id}
            style={{ backgroundImage: `url(${product.imgSrc})` }}
          >
            <Category>
              <h1>{product.title}</h1>
            </Category>
          </div>
          // </Link>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
