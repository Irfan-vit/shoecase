import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/json/success.json'

const style = {
  height: '1.3rem',
  width: '1rem',
}

const Success = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Success
