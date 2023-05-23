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
    height: 15rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  @media (min-width: 550px) {
    > div {
      height: 20rem;
    }
  }
  @media (min-width: 868px) {
    height: 20rem;
    flex-basis: 49%;
    margin: 1% 0;
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
          <div
            key={product._id}
            style={{ backgroundImage: `url(${product.imgSrc})` }}
          >
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
