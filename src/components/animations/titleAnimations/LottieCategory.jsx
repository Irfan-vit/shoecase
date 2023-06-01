import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../../assets/json/shop.json'

const style = {
  height: '100%',
  width: '100%',
}

const options = {
  animationData: likeButton,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const LottieCategory = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
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

export default LottieCategory
