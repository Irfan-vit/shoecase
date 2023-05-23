import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  > div {
    position: relative;
    > img {
      height: 100%;
      width: 100%;
    }
    > div > h1 {
      position: absolute;
      top: 0;
      background-color: #faebd747;
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

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <div>
            <img src={product.imgSrc} alt="" />
            <div>
              <h1><Link></Link>{product.title}</h1>
            </div>
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
