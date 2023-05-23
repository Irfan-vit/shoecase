import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  > div {
    margin: 1% 0;
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
      color: ${(props) => props.theme.primaryText};
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
        transition: all 0.3s ease-in;
      }
    }
    div > a:hover {
      color: ${(props) => props.theme.offSetText};
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
      flex-basis: 49%;
      > div > a {
        font-size: var(--font-xxl);
      }
    }
  }
  > div:hover {
    animation: tilt-shaking 0.15s
  }
  @keyframes tilt-shaking {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0eg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const Categories = () => {
  const { getCategories } = useProducts()
  console.log(getCategories)
  return (
    <>
      <StyledCategoryCardWrapper>
        {getCategories?.data?.map((category) => (
          <div>
            <img src={category.imgSrc} alt="" />

            <div>
              <Link>
                <span>{category.categoryName.toUpperCase()}</span>
              </Link>
            </div>
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
