import styled from 'styled-components'

const StyledAddress = styled.form`
  max-width: 500px;
  /* margin: 0 auto; */
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-around; */
  > label {
    /* flex-basis: 50%; */
    /* display: block; */
  }
  > :nth-child(4) {
    order: 2;
  }
`
export { StyledAddress }
