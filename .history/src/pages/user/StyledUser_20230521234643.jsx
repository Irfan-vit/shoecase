import styled from 'styled-components'

const StyledAddressForm = styled.form`
  max-width: 500px;
  display: flex;
  flex-flow: row wrap;
  gap: 4%;
  background-color: #808080c3;
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
    flex-basis: 99%;
  }
  > :nth-child(2),
  :nth-child(3),
  :nth-child(5) {
    flex-basis: 47%;
  }
  > :nth-child(4) {
    flex-basis: 47%;
  }
  > :nth-child(5) {
    flex-basis: ;
  }
  @media (max-width: 300px) {
    > :nth-child(1),
    :nth-child(2),
    :nth-child(3),
    :nth-child(4),
    :nth-child(5) {
      flex-basis: 100%;
    }
  }
`
const StyledAddress = styled.div`
  max-width: 500px;
  border: 1px solid black;
  padding: 0.95rem;
  margin: 1rem 0;
`

export { StyledAddress, StyledAddressForm }
