import styled from 'styled-components'

const StyledPosterWrapper = styled.div`
  max-width: 1200px;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  display: flex;
  flex-flow: row-reverse wrap;
  > div {
    flex-basis: 49%;
  }
`
const StyledPosterWrapperReverse = styled.div`
  max-width: 1200px;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  > div {
    flex-basis: 49%;
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
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  gap: 5%;
`

export {
  StyledPosterWrapper,
  StyledPosterImageWrapper,
  StyledPosterDetails,
  StyledPosterWrapperReverse,
}
