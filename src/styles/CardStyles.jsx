import styled from 'styled-components'

const StyledProduct = styled.figure`
  position: relative;
  background-color: #fafafa84;
  transition: all 1s ease;
  border: 2px solid #e2dbeb;

  :hover {
    background-color: ${(props) => props.theme.offSetBg};
    border: 2px solid ${(props) => props.theme.offSetText};
    border: 2px soilid black;
  }
  > * {
    text-decoration: none;
  }
  border-radius: 5px;
  margin-bottom: 2%;
  > a > div > img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/0.9;
    object-fit: cover;
    transform: scale(0.8);
    transition: all 0.5s ease;
  }

  > a > div:hover > img {
    transform: scale(0.9);
  }

  > a > figcaption {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: space-evenly;
    h4 {
      font-family: var(--font-family-headings);
      color: ${(props) => props.theme.offSetText};
      text-align: center;
    }
    p {
      > span {
        font-size: var(--font-xs);
      }
      color: ${(props) => props.theme.offSetText};
      font-family: var(--font-family-hero);
      font-weight: var(--font-weight-semi-bold);
      font-size: var(--font-md);
    }
  }

  :hover {
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
`

const StyledFeatured = styled.span`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.action};
  color: ${(props) => props.theme.actionOffSet};
  border-radius: 3px 0px 4px 0px;
  padding: 0 2px;
  font-family: var(--font-family-headings);
  font-size: var(--font-xs);
`

export { StyledProduct, StyledIconsWrapper, StyledFeatured }
