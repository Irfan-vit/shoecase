import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop copy.json'

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
        visibility: [0, 0.2],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.2, 0.9],
        type: 'seek',
        frames: [0, 60],
      },
    ],
  })

  return Animation
}

export default HeroProducts
