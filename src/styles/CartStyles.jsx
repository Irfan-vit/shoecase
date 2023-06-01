import styled from 'styled-components'

const StyledCartCardWrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > :first-child {
      flex-basis: 30%;
    }
    > :last-child {
      flex-basis: 70%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
`

const StyledCartImage = styled.div`
  flex-basis: 30%;
  > div > img {
    height: 100%;
    width: 100%;
  }
`
// cart wrapper styles

const StyledCartCardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 11rem;
  @media (min-width: 343px) {
    margin-top: 8rem;
  }
`

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  > div {
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
      rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    position: fixed;
    background-color: ${(props) => props.theme.primaryBg};
    width: 100%;
    top: 8rem;
    padding: 1rem;
    min-height: 100px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    > h2,
    h3 {
      color: ${(props) => props.theme.offSetText};
      text-decoration-line: underline;
      text-decoration-color: ${(props) => props.theme.offSetText};
      text-decoration-style: solid;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
    }
  }
`

export {
  StyledCartImage,
  StyledCartCardWrapper,
  StyledCartCardsWrapper,
  StyledOrderContetntWrapper,
}
