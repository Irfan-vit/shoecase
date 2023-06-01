import { useLottie } from 'lottie-react'
import sale from '../../../assets/json/sale.json'

const style = {
  height: 200,
  display: 'inline',
  width: 300,
}

const Sale = () => {
  const options = {
    animationData: sale,
    loop: false,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Sale
