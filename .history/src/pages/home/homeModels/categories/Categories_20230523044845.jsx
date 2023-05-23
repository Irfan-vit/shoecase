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
    > div > a {
      position: absolute;
      top: 0;
      left: 0;
      text-decoration: none;
      color: ${(props) => props.theme.offSetText};
      font-size: var(--font-xl);
      background-image: linear-gradient(
        rgba(232, 205, 255, 0.507),
        rgba(193, 175, 241, 0.9)
      );
      height: 100%;
      width: 100%;
      text-align: center;
      font-family: var(--foant-family-category);
      span {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 0;
      }
    }
  }
  @media (min-width: 550px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    margin-bottom: 10px;
    > div {
      flex-basis: 49%;
    }
  }
  @media (min-width: 868px) {
    > div {
      flex-basis: 49%;
      > div > a {
        font-size: var(--font-xxl);
      }
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
              <Link>
                <span>{product.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
