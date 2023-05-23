import { useLottie } from 'lottie-react'
import theme from '../../../assets/json/'

const style = {
  height: '2.5rem',
  display: 'block',
  cursor: 'pointer',
}

const SideNavClose = () => {
  const options = {
    animationData: theme,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default SideNavClose
