import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/json/empty.json'

const style = {
  height: 300,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
}

const Empty = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Empty
