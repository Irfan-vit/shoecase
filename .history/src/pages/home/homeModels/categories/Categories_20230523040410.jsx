import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  @media (min-width: 550px) {
  }
  @media (min-width: 868px) {
  }
`

const CategoryCard = styled.div`
  position: relative;
`

const Category = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #f0f8ff5a;
  > h1 {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    /* margin-top: 20%; */
  }
`

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <Link key={product._id}>
            <CategoryCard>
              <img src={product.imgSrc} alt="" />
              <Category>
                <h1>{product.title}</h1>
              </Category>
            </CategoryCard>
          </Link>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
