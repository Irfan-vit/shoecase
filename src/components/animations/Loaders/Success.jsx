import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/json/loading.json'

const style = {
  height: '1.3rem',
  width: '1.3rem',
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
