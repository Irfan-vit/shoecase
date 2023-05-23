import styled from 'styled-components'

const StyledNavWrapper = styled.aside`
  margin-bottom: 9rem;
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-bold);
  color: var(--primary-light);
  width: 100%;
  @media (min-width: 350px) {
    font-size: 3rem;
  }
  @media (min-width: 950px) {
    font-size: 4rem;
  }
`

const StyledNav = styled.nav`
  box-shadow: var(--box-shadow);
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 9rem;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  > :nth-child(1) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2rem;
  }
  > :nth-child(2) {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    text-align: center;
    flex-basis: 80%;
    > :nth-child(1) {
      flex-basis: 60%;
      order: 2;
    }
    > :nth-child(2) {
      flex-basis: 20%;
      order: 1;
    }
  }
  @media (min-width: 900px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    > :nth-child(1) {
      display: flex;
      flex-flow: row;
      flex-basis: 20%;
      justify-content: space-around;
      align-items: center;
    }
    > :nth-child(2) {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: center;
      flex-basis: 80%;
      > :nth-child(1) {
        flex-basis: 60%;
        order: 1;
      }
      > :nth-child(2) {
        flex-basis: 20%;
        order: 2;
      }
    }
  }
`

const StyledNavList = styled.div`
  > ul {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  > ul > li {
    flex-basis: 23%;
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
    color: ${(props) => props.theme.higilight};
    :hover,
    :active,
    :focus {
      color: ${(props) => props.theme.offSetText};
      text-decoration-line: underline;
      text-decoration-style: line;
      text-decoration-color: ${(props) => props.theme.offSetText};
      text-underline-offset: 3px;
    }
  }
`
export { StyledNavWrapper, StyledNav, StyledNavList, StyledTitle }
