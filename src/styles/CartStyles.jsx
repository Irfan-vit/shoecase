import styled from 'styled-components'

const StyledCartCardWrapper = styled.div`
  /* padding: 1rem; */
  margin: 0 auto;
  text-align: center;
  border: 1px solid black;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    /* gap: 2%; */
    > :first-child {
      flex-basis: 17%;
    }
    > :last-child {
      flex-basis: 82%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      > * {
        flex-basis: 24%;
      }
    }
  }
`

const StyledCartImage = styled.div`
  position: relative;
  > div > img {
    height: 100%;
    width: 100%;
  }
  > div {
  }
  > span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    border-radius: 0px 4px 0px 10px;
    color: ${(props) => props.theme.offSetText};
    margin: 0px 0px 10px 0px;
    transition: all 0.3s ease;
    background-color: ${(props) => props.theme.primaryBg};
    text-align: center;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    > svg {
      font-weight: 900px;
      font-size: 1.3rem;
      /* transform: scale(1.3); */
      :hover {
        /* transform: scale(1.5); */
      }
    }
  }
`
const StyledQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 2%;
  > button {
    padding: 0 10px;
  }
`

// cart wrapper styles

const StyledCartCardsWrapper = styled.div`
  background-color: #fafafa44;
  box-shadow: rgba(170, 125, 241, 0.4) -5px 5px;
`

const StyledCartWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  > :nth-child(1) {
    background-color: ${(props) => props.theme.offSetBg};
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 144px;
    > :nth-child(1) {
      > :last-child {
        display: none;
      }
    }
  }
  @media (min-width: 768px) {
    flex-flow: row-reverse wrap;
    > :nth-child(2) {
      flex-basis: 70%;
      height: 75vh;
      overflow-y: scroll;
    }
    > :nth-child(1) {
      flex-basis: 30%;
      > div {
        height: 100%;
        width: 100%;
        padding: 0 10%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        align-items: flex-end;
        align-content: center;
        gap: 1%;
        > h2 {
          font-family: var(--font-family-headings);
          font-size: var(--font-xl);
          color: ${(props) => props.theme.offSetText};
        }
        > hr {
          background-color: ${(props) => props.theme.primaryBg};
          height: 5px;
          width: 50%;
          float: right;
        }
        > div > p {
          color: ${(props) => props.theme.offSetText};
          font-family: var(--font-family-headings);
          /* font-size: var(--font-lg); */
          > strong {
            font-family: var(--font-family-hero);
          }
        }
        div > input {
          border-radius: var(--border-size4);
          cursor: pointer;
          margin: var(--spacing-unit);
          padding: var(--font-xxxs) var(--font-xxs);
          font-weight: var(--font-weight-bold);
          text-decoration: none;
          border: 1px solid var(--primary-color);
        }
      }
      > :nth-child(1) {
        > :last-child {
          display: block;
        }
      }
    }
  }
`

export {
  StyledCartImage,
  StyledCartCardWrapper,
  StyledCartCardsWrapper,
  StyledQuantity,
  StyledCartWrapper,
}
