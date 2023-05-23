import { useLottie, useLottieInteractivity } from 'lottie-react'
import search from '../../../assets/search2.json'
const style = {
  height: '1.5rem',
  display: 'inline-block',
  cursor: 'pointer',
}

const options = {
  animationData: search,
}

const Search = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'loop',
        frames: [0, 20],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [0],
      },
    ],
  })

  return <a href="#">{Animation}</a>
}

export default Search
