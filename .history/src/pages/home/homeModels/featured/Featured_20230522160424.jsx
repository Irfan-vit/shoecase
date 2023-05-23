import styled from 'styled-components'

const StyledCategoryCardWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  > div {
    flex-basis: 49%;
    
    background-color: red;
    border: 1px solid black;
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
