import styled from 'styled-components'

const StyledFeaturedCardWrapper = styled.div`
  > div {
    padding: 10px;
    background-color: #fafafa44;
    border: 2px solid #e2dbeb;
    margin: 1% 0;
    :hover {
      border: 2px solid ${(props) => props.theme.offSetText};
      background-color: #c089f8;
    }
    > a {
      text-decoration: none;
      color: ${(props) => props.theme.offSetText};
      > h4 {
        font-family: var(--font-family-headings);
        color: ${(props) => props.theme.offSetText};
      }
      p {
        > span {
          font-size: var(--font-xs);
        }
        color: ${(props) => props.theme.offSetText};
        font-family: var(--font-family-hero);
        font-weight: var(--font-weight-semi-bold);
        font-size: var(--font-md);
      }
    }
    > a > img {
      height: 100%;
      width: 100%;
      transition: all 0.3s ease;
      transform: scale(1);
    }
    > a:hover > img {
      transform: scale(1.06);
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
  }
  @media (min-width: 550px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-self: flex-start;
    gap: 1%;

    > div {
      flex-basis: 49%;
      align-self: flex-start;
    }
  }
  @media (min-width: 868px) {
    > div {
      flex-basis: 24%;
    }
  }
`
export { StyledFeaturedCardWrapper }
