import styled from 'styled-components'

// Product detail Card
const StyledProductDetailImage = styled.div`
  position: relative;
  > img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
    transform: scale(1);
  }
  > div {
    position: absolute;
    right: 0;
    top: 0;
    > span {
      padding: 0.2rem 0.6rem;
      cursor: pointer;
      border-radius: 0px 3px 0px 10px;
      color: ${(props) => props.theme.offSetText};
      margin: 0px 0px 10px 0px;
      transition: all 0.3s ease;
      background-color: ${(props) => props.theme.primaryBg};
      text-align: center;
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      > svg {
        font-weight: 900px;
        font-size: 1.3rem;
        /* transform: scale(1.3); */
        :hover {
          /* transform: scale(1.5); */
        }
      }
    }
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
      left: -3em;
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
    font-family: var(--font-family-headings);
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
  box-shadow: 10px 10px 0px ${(props) => props.theme.offSetBg};
  background-color: #fafafa44;
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
