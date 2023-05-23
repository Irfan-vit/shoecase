import styled from 'styled-components'

import Lottie from 'lottie-react'
const StyledMissionWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem;
`
const StyledMission = styled.div`
  display: block;
  line-height: 1.7;
  @media (min-width: 550px) {
    display: flow-root;
    max-width: 900px;
  }
  p > h2 {
    color: #474a56;
    font-size: var(--font-xxl);
  }
`
const StyledMissionAnimate = styled(Lottie)`
  height: 16vh;
  display: block;
  @media (min-width: 550px) {
    float: left;
    shape-outside: polygon(50% 0px, 103.91% 32.04%, 41.55% 119.54%, 0px 50%);
    height: 20vh;
  }
`
export { StyledMissionWrapper, StyledMission, StyledMissionAnimate }
