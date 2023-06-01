import styled from 'styled-components'
import heroImage from '../assets/images/hero2.jpg'
const StyledHeroImg = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  > div {
    min-height: 100%;
    padding: 20px;
    color: ${(props) => props.theme.offSetText};
    display: flex;
    flex-flow: column wrap;
    flex-basis: auto;
    align-items: flex-start;
    align-content: space-evenly;
    justify-content: space-between;
    text-align: center;
    > div {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
    }
  }
  > div > div {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-end;
    padding-right: 5rem;
  }
  > div > div > h1 {
    font-size: var(--font-xxl);
    font-family: var(--font-family-hero);
    @media (min-width: 550px) {
      font-size: var(--font-xxxl);
    }

    @media (min-width: 900px) {
      font-size: var(--font-xxxxl);
    }
  }
  div > h2 {
    font-size: var(--font-xl);
    font-family: var(--font-family-hero);
    width: 50%;
    text-align: left;
    @media (min-width: 550px) {
      font-size: var(--font-xxl);
    }

    @media (min-width: 900px) {
      font-size: var(--font-xxxl);
    }
  }
`

export { StyledHeroImg }
