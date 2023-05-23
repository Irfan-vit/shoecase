import styled from 'styled-components'

const StyledSideToggle = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    bottom: 0;
  }
`

const StyledFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.higilight};
  > * > a {
    text-decoration: none;
    color: ${(props) => props.theme.higilight};
    text-decoration-line: underline;
    text-underline-offset: 2px;
    :hover,
    :active,
    :focus {
      color: ${(props) => props.theme.PrimaryHeading};
      text-decoration-line: underline;
      text-decoration-style: line;
      text-decoration-color: ${(props) => props.theme.PrimaryHeading};
      text-underline-offset: 2px;
    }
  }
  > :first-child {
    text-align: left;
  }
  > :last-child {
    text-align: right;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  > h4 {
    color: ${(props) => props.theme.PrimaryHeading};
  }
  > label {
    color: ${(props) => props.theme.primaryText};
  }
  > label > span {
    margin-left: var(--spacing-unit);
  }
`

const StyledAside = styled.div`
  padding: 0 1rem;
  z-index: 0;
  @media (max-width: 900px) {
    margin-top: 9rem;
    z-index: 2;
    position: fixed;
    top: 0;
    height: 100%;
    width: 200px;
    background-color: ${(props) => props.theme.primaryBg};
    display: none;
    :target {
      display: block;
    }
  }
  > div {
    display: none;
    @media (max-width: 900px) {
      display: block;
      position: fixed;
      top: 94%;
    }
  }
  > ul {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: center;
    > li {
      list-style-type: none;
    }
    > li * {
      margin-bottom: 0.5rem;
    }
  }
`

const StyledSideToggleClose = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 9rem;
    left: 200px;
  }
`

const Hr = styled.hr`
  border-top: '1px solid #a9b1ba';
`

export {
  StyledSideToggle,
  StyledFormHeader,
  StyledForm,
  StyledAside,
  StyledSideToggleClose,
  Hr,
}
