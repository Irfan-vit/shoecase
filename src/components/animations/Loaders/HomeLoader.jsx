import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/json/run.json'

const style = {
  height: 500,
  marginTop: '10%',
}

const HomeLoader = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default HomeLoader
