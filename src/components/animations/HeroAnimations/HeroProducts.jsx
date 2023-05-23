import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../../assets/sale.json'

const style = {
  marginTop: '15vh',
  height: 300,
}

const options = {
  animationData: likeButton,
}

const HeroProducts = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'seek',
        frames: [1, 45],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [45],
      },
    ],
  })

  return Animation
}

export default HeroProducts
