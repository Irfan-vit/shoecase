import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  > div {
    padding: 10px;
    transition: all 0.3s ease-in;
    background-color: ${(props) => props.theme.offSetBg};
    > a > img {
      height: 100%;
      width: 100%;
      transform: scale(1);
    }
    > a > img:hover {
      
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
  > div:hover {
    padding: 6px;
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
            <Link>
              <img src={product.imgSrc} alt="" />
            </Link>
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured
