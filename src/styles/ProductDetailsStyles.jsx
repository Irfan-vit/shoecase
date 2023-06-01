import styled from 'styled-components'

// Product detail Card
const StyledProductDetailImage = styled.div`
  > img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
    transform: scale(1);
  }
  @media (min-width: 850px) {
    flex-basis: 50%;
    > img {
      min-width: 0%;
      min-height: 0%;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 0em;
      left: -2em;
      transform: scale(1.5);
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
  }
`
const StyledProductDetail = styled.div`
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

// product detail page styles

const StyledProductDetailWrapper = styled.div`
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
  background-color: #fafafa;
  margin-top: 10rem;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 850px) {
    position: relative;
    max-width: 850px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 30vh;
    padding: 2rem;
  }
`

export {
  StyledProductDetailImage,
  StyledProductDetail,
  StyledProductDetailWrapper,
}
