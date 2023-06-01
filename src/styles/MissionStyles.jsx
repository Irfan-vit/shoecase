import styled from 'styled-components'

import Lottie from 'lottie-react'
const StyledMissionWrapper = styled.section`
  > h2 {
    margin: 0 auto;
    color: #474a56;
    font-size: var(--font-xxl);
    text-align: center;
    font-family: var(--foant-family-hero);
  }
`
const StyledMission = styled.div`
  margin: 0 auto;
  line-height: 1.7;
  @media (min-width: 550px) {
    display: flex;
    max-width: 900px;
    :first-child {
      flex-basis: 29%;
    }
    :last-child {
      flex-basis: 69%;
    }
  }
  > div > h2 {
    color: #474a56;
    font-size: var(--font-xxl);
    text-align: center;
    font-family: var(--foant-family-hero);
  }
`
const StyledMissionAnimate = styled(Lottie)`
  height: 13vh;
  margin-right: 2rem;
  display: block;
  @media (min-width: 550px) {
    float: left;
    shape-outside: polygon(
      92.66% 27px,
      53.43% 73.27%,
      41.55% 119.54%,
      48px 32.23%
    );
  }
`
export { StyledMissionWrapper, StyledMission, StyledMissionAnimate }
