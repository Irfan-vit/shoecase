import { useLottie, useLottieInteractivity } from 'lottie-react'
import theme from '../../../assets/json'

const style = {
  height: '2.5rem',
  display: 'block',
  cursor: 'pointer',
}

const options = {
  animationData: theme,
}

const SideNavToggle = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'seek',
        frames: [2, 39],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [2],
      },
    ],
  })

  return Animation
}

export default SideNavToggle
