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

const Category = styled.div`
  position: absolute;
  background-color: #f0f8ff5a;
  height: 100%;
  width: 100%;
  > h1 {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
          <div key={product._id}>
            <img src={product.imgSrc} alt="" />
            <Link>
              <Category>
                <h1>{product.title}</h1>
              </Category>
            </Link>
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
