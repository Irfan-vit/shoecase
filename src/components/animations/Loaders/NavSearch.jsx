import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/json/searchingNav.json'

const style = {
  height: '5rem',
  width: '5rem',
  margin: '0 auto',
}

const SearchNav = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default SearchNav
