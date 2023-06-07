import styled from 'styled-components'

// Product Detail Shimmer
const StyledProductDetailImageShimmer = styled.div`
  > img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 850px) {
    flex-basis: 50%;
    > img {
      min-width: 0%;
      min-height: 0%;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 1.8em;
      left: -13em;
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
  }
`
const StyledProductDetailShimmer = styled.div`
  padding: 2rem;
  > h2,
  h3,
  strong {
    color: ${(props) => props.theme.PrimaryHeading};
    font-family: var(--font-family-heading);
  }
  > ul > li {
    color: ${(props) => props.theme.primaryText};
  }
  > h1 {
    color: ${(props) => props.theme.offSetText};
    font-family: var(--font-family-hero);
    font-size: var(--font-xxxl);
    > span {
      font-size: var(--font-lg);
    }
  }
  @media (min-width: 850px) {
    flex-basis: 50%;
  }
`

const StyledProductDetailWrapperShimmer = styled.div`
  @media (min-width: 850px) {
    display: flex;
    width: 100%;
  }
`
// Products Shimmer

const StyledProductsShimmerWrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 1%;
  @media (min-width: 550px) {
    flex-basis: 48%;
  }

  @media (min-width: 900px) {
    flex-basis: 23%;
  }
`

const StyledProductShimmer = styled.figure`
  margin-bottom: 2%;
  > a > div {
    width: 100%;
    height: auto;
    aspect-ratio: 1/0.8;
    object-fit: cover;
  }

  @media (min-width: 550px) {
    flex-basis: 49%;
    > a {
      display: flex;
      flex-flow: column wrap;
      gap: 1%;
    }
  }

  @media (min-width: 900px) {
    flex-basis: 24%;
    > a {
      display: flex;
      flex-flow: column wrap;
      gap: 1%;
    }
  }
`

export {
  StyledProductDetailImageShimmer,
  StyledProductDetailShimmer,
  StyledProductDetailWrapperShimmer,
  StyledProductShimmer,
  StyledProductsShimmerWrapper,
}
