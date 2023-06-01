import styled from 'styled-components'

const StyledProduct = styled.figure`
position: relative;
>* {
  text-decoration: none;
}
  /* border: 2px solid ${(props) => props.theme.offSetBg}; */
  margin-bottom: 1%;
  > a > div {
    /* background-color: white; */
  }
  > a > div > img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/0.9;
    object-fit: cover;
    transform: scale(0.8);
    transition: all 0.5s ease;
  }

  > a > div:hover > img {
    transform: scale(1);
  }

  > a > figcaption {
    h3{
      font-family: var(--font-family-heading);
      color: ${(props) => props.theme.offSetText};
    }
    p{
      color: ${(props) => props.theme.offSetText};
      font-family: var(--font-family-hero);
      font-weight: var(--font-weight-bold);
    }
  }

  :hover {
    /* border: 2px solid ${(props) => props.theme.higilight}; */
    > a > div > img {
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
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
const StyledIconsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column-reverse wrap;
  top: 0;
  right: 0;
  > span {
    padding: 0.07rem 0.7rem;
    cursor: pointer;
    /* background-color: ${(props) => props.theme.PrimaryHeading}; */
    border-radius: 0px 0px 0px 10px;
    border: 1px solid ${(props) => props.theme.offSetBg};
    color:  ${(props) => props.theme.offSetText};
    margin: 5px;
    transition: all 0.3s ease;
    > * {
      font-weight: 900px;
      font-size: 1rem;
      transform: scale(1.1);
    }
  }
`

export { StyledProduct, StyledIconsWrapper }
