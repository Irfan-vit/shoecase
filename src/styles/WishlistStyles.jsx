import styled from 'styled-components'
const StyledWishlist = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2%;
  flex-flow: row wrap;
  @media (min-width: 550px) {
    > figure {
      flex-basis: 47%;
    }
  }
  @media (min-width: 900px) {
    > figure {
      flex-basis: 23%;
    }
  }
`
export { StyledWishlist }
