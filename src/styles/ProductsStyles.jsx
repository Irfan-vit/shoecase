import styled from 'styled-components'
const StyledProducts = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    gap: 1%;
  }
`

const StyledProductDetails = styled.div`
  > div:first-child {
    margin: 20px 0;
    display: flex;
    gap: 2%;
    > * {
      flex-basis: 49%;
    }
  }
  > div > ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-height: 45px;
    gap: 1%;
    > li {
      list-style: none;
      padding: 0.5rem 1rem;
      border: 2px solid ${(props) => props.theme.PrimaryHeading};
      border-radius: 50px;
    }
  }
`

const StyledProductsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 900px) {
    min-height: 83vh;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 1%;
    > :first-child {
      flex-basis: 19%;
    }
    > :last-child {
      flex-basis: 79%;
    }
  }
`
const StyledPagination = styled.div`
  > button > span > * {
    width: 100%;
    height: 100%;
  }
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export {
  StyledProducts,
  StyledProductDetails,
  StyledProductsWrapper,
  StyledPagination,
}
