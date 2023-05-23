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

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <div
            key={product._id}
            style={{
              transform: 'rotate(45deg)',
              overflow: 'hidden',
              // margin: '0 auto',
              margin: ' 0 100px',
              width: '400px',
              display: 'block',
            }}
          >
            <img
              style={{ transform: 'rotate(-45deg) scale(1.42)' }}
              src={product.imgSrc}
              alt=""
            />
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
