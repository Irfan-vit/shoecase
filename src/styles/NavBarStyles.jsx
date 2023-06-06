import styled from 'styled-components'

const StyledNavTitle = styled.h1`
  font-size: 3rem;
  font-family: var(--font-family-title);
  font-weight: 100;
  color: ${(props) => props.theme.offSetText};
  width: 100%;
  @media (min-width: 500px) {
    font-size: 3rem;
  }
  @media (min-width: 1040px) {
    font-size: 4rem;
  }
`

const StyledNavList = styled.div`
  > ul {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
  > ul > li {
    text-align: center;
  }
  > ul > li > a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    text-decoration: underline;
    text-decoration-color: transparent;
    -webkit-text-decoration-color: transparent;
    -moz-text-decoration-color: transparent;
    text-decoration: none;
    color: ${(props) => props.theme.offSetText};
    :hover,
    :active,
    :focus {
      color: #222831;
      text-decoration-line: underline;
      text-decoration-style: line;
      text-decoration-color: ${(props) => props.theme.offSetText};
      text-underline-offset: 3px;
    }
  }
`
export { StyledNavList, StyledNavTitle }
