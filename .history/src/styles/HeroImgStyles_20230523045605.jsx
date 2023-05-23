import styled from 'styled-components'
import heroImage from '../assets/images/hero.jpg'
const StyledHeroImg = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(232, 205, 255, 0.507),
      rgba(193, 175, 241, 0.9)
    ),
    url(${heroImage});
  height: 300px;
  background-repeat: no-repeat;
  min-height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  > div {
    min-height: 50vh;
    color: ${(props) => props.theme.offSetText};
    display: flex;
    flex-flow: column wrap;
    flex-basis: auto;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    text-align: center;
    > div {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
  }
  > div > h1 {
    font-size: var(--font-xxl);
    font-family: var(       );

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

    @media (min-width: 550px) {
      font-size: var(--font-xxl);
    }

    @media (min-width: 900px) {
      font-size: var(--font-xxxl);
    }
  }
`

export { StyledHeroImg }
