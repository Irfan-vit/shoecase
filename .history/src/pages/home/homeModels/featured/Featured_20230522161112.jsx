import styled from 'styled-components'

const StyledCategoryCardWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1%;
  > div {
    flex-basis: 24%;
    min-height: ;
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
