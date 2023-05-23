import { useLottie, useLottieInteractivity } from 'lottie-react'
import theme from '../../assets/theme.json'

const style = {
  height: '3rem',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'fixed',
  top: '0',
  right: '0',
}

const options = {
  animationData: theme,
}

const ThemeToggle = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'stop',
        frames: [0, 20],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [20],
      },
    ],
  })

  return Animation
}

export default ThemeToggle
