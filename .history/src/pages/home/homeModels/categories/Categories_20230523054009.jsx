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
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
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
