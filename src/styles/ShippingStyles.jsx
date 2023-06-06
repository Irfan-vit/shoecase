import styled from 'styled-components'

const StyledAddressWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`
const StyledAddress = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 1rem;
  label {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  label > div {
    display: flex;
    flex-flow: row wrap;
    gap: 0%;
  }
`
const StyledAddressForm = styled.div`
  > form {
    display: flex;
    flex-flow: row wrap;
    gap: 4%;
    border: 2px solid ${(props) => props.theme.offSetBg};
    padding: 1rem;
    margin: 1rem 0;
    > label {
      margin: 0.5rem 0;
      > input {
        width: 100%;
        height: 2rem;
      }
    }
    > :nth-child(1) {
      flex-basis: 100%;
    }
    > :nth-child(2) {
      flex-basis: 48%;
    }
    > :nth-child(3) {
      flex-basis: 48%;
    }
    > :nth-child(4) {
      flex-basis: 48%;
    }
    > :nth-child(5) {
      flex-basis: 48%;
    }
    @media (max-width: 500px) {
      > :nth-child(-n + 5) {
        flex-basis: 100%;
      }
    }
  }
`
export { StyledAddressWrapper, StyledAddress, StyledAddressForm }
