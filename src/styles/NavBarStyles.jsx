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
const StyledNav = styled.div`
  margin-bottom: 15rem;

  @media (min-width: 250px) {
    margin-bottom: 12rem;
  }
  @media (min-width: 550px) {
    margin-bottom: 9rem;
  }
  @media (min-width: 900px) {
    margin-bottom: 7rem;
  }
  @media (min-width: 1040px) {
    margin-bottom: 8rem;
  }
`

const StyledNavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  padding: 1rem;
  background-color: ${(props) => props.theme.offSetBg};
  display: flex;
  flex-flow: column wrap;
  > :nth-child(1) {
    text-align: center;
    order: 1;
  }
  > :nth-child(2) {
    position: relative;
    order: 3;
    > form > span {
      position: absolute;
      right: 20px;
      font-size: 1.5rem;
    }
    > form > input {
      width: 100%;
      height: 30px;
      border: 2px solid ${(props) => props.theme.offSetText};
      transition: all 0.3s ease;
    }
    > div {
      display: none;
    }
    > form:has(> input) + div:hover {
      display: block;
    }
    > form:has(> input:focus-visible, > input:active) + div {
      display: block;
    }
    > form > input:focus + span {
      animation: sweep 3s ease-in-out;
    }
    @keyframes sweep {
      0% {
        opacity: 0;
        margin-left: -10px;
      }
      100% {
        opacity: 1;
        margin-left: 0px;
      }
    }
  }
  > :nth-child(3) {
    order: 2;
  }
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    > :nth-child(1) {
      flex-basis: 50%;
      text-align: center;
      order: 1;
    }
    > :nth-child(2) {
      flex-basis: 100%;
      order: 3;
      padding: 0;
      margin: 0;
      > form {
        display: block;
        position: relative;
      }
      > form > span {
        position: absolute;
        right: 0;
        font-size: 1.5rem;
      }
      > form > input {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        margin: 0;
        float: right;
        height: 30px;
        border: 2px solid ${(props) => props.theme.offSetText};
        transition: all 0.3s ease;
        :target,
        :focus,
        :focus-within,
        :active {
          width: 100%;
          right: 0;
        }
      }
    }
    > :nth-child(3) {
      order: 2;
      flex-basis: 50%;
    }
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > :nth-child(1) {
      order: 1;
      flex-basis: 30%;
    }
    > :nth-child(2) {
      order: 2;
      flex-basis: 50%;
      > form > input {
        width: 40%;
      }
    }
    > :nth-child(3) {
      order: 3;
      flex-basis: 20%;
    }
  }
`

const StyledSearchResult = styled.div`
  position: absolute;
  background-color: #ffffff;
  border: 2px solid #c1aff1;
  padding: 0 2rem;
  border-radius: 5px;
  width: 100%;
  overflow-y: scroll;
  max-height: 50vh;
  @media (min-width: 900px) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    right: 0%;
    top: 100%;
    > :nth-child(1) {
      flex-basis: 100%;
      position: relative;
      > ul {
        height: 100%;
        position: fixed;
        /* left: 0%; */
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        gap: 5%;
        list-style: none;
        > li {
          text-align: center;
        }
      }
    }
  }
`

const StyledSearchCard = styled.div`
  display: flex;
  > a {
    text-decoration: none;
  }
  > a > p {
    color: ${(props) => props.theme.offSetText};
    font-family: var(--font-family-headings);
    font-size: var(--font-xs);
  }
  > a > div > img {
    height: 100%;
    width: 100%;
  }
`

const StyledSearchCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2%;
  > div {
    flex-basis: 23%;
    margin-bottom: 2%;
  }
`

export {
  StyledNavList,
  StyledNavTitle,
  StyledNav,
  StyledNavBarWrapper,
  StyledSearchResult,
  StyledSearchCard,
  StyledSearchCardWrapper,
}
