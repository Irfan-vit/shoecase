import styled from 'styled-components'

const StyledFooterWraper = styled.section`
  background-color: ${(props) => props.theme.offSetBg};
  color: #474a56;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`
const StyledFooter = styled.footer`
  > * h4 {
    font-size: var(--font-lg);
  }
  > * li {
    font-size: var(--font-md);
  }
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  @media (min-width: 550px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ol,
  address > ol {
    list-style-type: none;
  }
  > div > ul,
  div > ol,
  div > address {
    margin-bottom: 2rem;
    @media (min-width: 550px) {
      margin: 0 auto;
    }
  }
`
export { StyledFooterWraper, StyledFooter }
