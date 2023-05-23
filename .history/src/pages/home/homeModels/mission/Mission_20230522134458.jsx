import rocket from '../../../../assets/json/mission.json'

import {
  StyledMissionWrapper,
  StyledMission,
  StyledMissionAnimate,
} from '../../../../styles/index'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Mission = () => {
  return (
    <StyledMissionWrapper>
      <StyledMission>
        <div>
          <h2>Our Mission</h2>
          <StyledMissionAnimate
            options={defaultOptions}
            animationData={rocket}
          />

          <p>
            Our mission is what drives us to do everything possible to expand
            human potential. We do that by creating groundbreaking sport
            innovations, by making our products more sustainable. We always
            strive to exceed consumer expectations and provide them with the
            highest value, be it for any situation, from getting ready for a
            nighttime stroll to working up a sweat on the pitch, we&apos;ve got
            you covered.
          </p>
        </div>
      </StyledMission>
    </StyledMissionWrapper>
  )
}

export default Mission
