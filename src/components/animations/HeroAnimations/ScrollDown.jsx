import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/down.json'

const style = {
  height: '3rem',
  width: '3rem',
}

const ScrollDown = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default ScrollDown
