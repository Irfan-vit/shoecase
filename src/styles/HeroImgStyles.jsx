import styled from 'styled-components'
import heroImage from '../assets/images/hero2.jpg'
const StyledHeroImg = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(193, 175, 241, 0),
      rgba(232, 205, 255, 0)
    ),
    url(${heroImage});
  height: 70vh;
  object-fit: cover;
  background-position: 70% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: rgba(58, 44, 80, 0.438) -15px 0px 15px -15px,
    rgba(44, 62, 80, 0.411) 15px 0px 15px -15px;
  border-radius: 3px;
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
  > div > div > div > div {
    margin: 0 auto;
  }
  > div > div > h1 {
    font-size: var(--font-xxl);
    font-family: var(--font-family-hero);
    @media (min-width: 550px) {
      font-size: var(--font-xxl);
    }

    @media (min-width: 900px) {
      font-size: var(--font-xxxl);
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
