import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 0.5rem;
  color: #474a56;
  font-size: var(--font-xl);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: ${(props) => props.theme.offSetBg};
  text-decoration-style: double;
  text-underline-offset: 5px;
  @media (min-width: 550px) {
    font-size: var(--font-xxl);
  }

  @media (min-width: 900px) {
    font-size: var(--font-xxl);
  }
`
const Div = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 1rem;
  @media (min-width: 550px) {
    font-size: var(--font-xxl);
  }
  @media (min-width: 900px) {
    font-size: var(--font-xxl);
  }
`

const StyledLOttie = styled.div`
  height: 8rem;
  width: 13rem;
  margin: 0 auto;
  @media (min-width: 550px) {
    height: 10rem;
    width: 15rem;
  }
  @media (min-width: 900px) {
    height: 10rem;
    width: 15rem;
  }
`

const StyledTitle = styled.div`
  margin: 0 auto;
`
export { Div, StyledLOttie, StyledTitle, H1 }
