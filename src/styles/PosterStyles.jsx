import styled from 'styled-components'

const StyledPosterWrapper = styled.div`
  max-width: 1200px;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row-reverse wrap;
    > div {
      flex-basis: 49%;
    }
  }
`
const StyledPosterWrapperReverse = styled.div`
  max-width: 1200px;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    > div {
      flex-basis: 49%;
    }
  }
`

const StyledPosterImageWrapper = styled.div`
  > img {
    height: 100%;
    width: 100%;
  }
`

const StyledPosterDetails = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  gap: 5%;
  > h2 {
    color: ${(props) => props.theme.offSetText};
    font-family: var(--font-family-headings);
    font-weight: var(--font-weight-strong);
    font-size: var(--font-xl);
  }
  > p {
    font-size: var(--font-md);
    color: ${(props) => props.theme.offSetText};
  }
  > p > strong {
    color: ${(props) => props.theme.action};
    font-family: var(--font-family-headings);
    font-weight: var(--font-weight-strong);
    font-size: var(--font-lg);
    line-height: 2;
  }
  > div {
    margin: 0 auto;
  }
`

export {
  StyledPosterWrapper,
  StyledPosterImageWrapper,
  StyledPosterDetails,
  StyledPosterWrapperReverse,
}
