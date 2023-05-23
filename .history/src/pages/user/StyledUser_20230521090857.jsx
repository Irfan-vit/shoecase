import styled from 'styled-components'

const StyledAddress = styled.form`
  max-width: 500px;
  /* margin: 0 auto; */
  display: flex;
  flex-flow: row wrap;
  gap: 2%;
  /* justify-content: space-around; */
  > label > input {
    /* flex-basis: 50%; */
    /* display: block; */
    width: 100%;
  }
  > :nth-child(1) {
    flex-basis: 100%;
    /* order: 1; */
  }
  > :nth-child(2),
  :nth-child(3) {
    flex-basis: 48%;
  }
`
export { StyledAddress }
