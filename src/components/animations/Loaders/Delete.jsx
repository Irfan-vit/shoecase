import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/json/trash.json'

const style = {
  height: '1.4rem',
  width: '1.4rem',
  margin: '0 auto',
}

const Delete = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Delete
