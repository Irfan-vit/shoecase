import styled from 'styled-components'

const StyledNavWrapper = styled.aside`
  margin-bottom: 8rem;
`

const StyledNav = styled.nav`
  box-shadow: var(--box-shadow);
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  background-color: ${(props) => props.theme.offSetBg};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }
  > div:nth-child(1) {
    order: 1;
    flex-basis: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10%;
  }
  > div:nth-child(2) {
    order: 2;
    flex-basis: 50%;
    display: flex;
    flex-flow: column-reverse wrap;
    > div:nth-child(1) {
      width: 100%;
    }
    > div:nth-child(2) {
      width: 100%;
      > ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        align-content: center;
      }
    }
  }
  @media (min-width: 900px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > div:nth-child(1) {
      flex-basis: 30%;
      order: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 1%;
      > div:nth-child(1) {
        flex-basis: 48%;
      }
      > div:nth-child(2) {
        flex-basis: 48%;
      }
    }
    > div:nth-child(2) {
      flex-basis: 70%;
      order: 2;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      > div:nth-child(1) {
        flex-basis: 60%;
      }
      > div:nth-child(2) {
        flex-basis: 40%;
        > ul {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;
          align-content: center;
        }
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
      text-underline-offset: 10px;
    }
  }
`
export { StyledNavWrapper, StyledNav, StyledNavList }
