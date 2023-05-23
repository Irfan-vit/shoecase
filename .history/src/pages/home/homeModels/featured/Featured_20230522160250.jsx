import styled from 'styled-components'

const StyledCategoryCardWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  > * div {
    flex-basis: 49%;
  }
`

const Featured = () => {
  return (
    <>
      <StyledCategoryCardWrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured
