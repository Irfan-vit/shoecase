import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/skeleton.json'

const style = {
  height: 450,
  margin: '0 auto',
  display: 'inline-block',
  //   justifyContent: 'center',
}

const Skeleton = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Skeleton
