import { useLottie, useLottieInteractivity } from 'lottie-react'
import logoRun from '../../../assets/json/logo.json'
const style = {
  height: '8%',
  // width: '8%',
  display: 'inline-block',
  cursor: 'pointer',
}

const options = {
  animationData: logoRun,
}

const HeroLogo = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'seek',
        frames: [49, 72],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [72],
      },
    ],
  })

  return Animation
}

export default HeroLogo
