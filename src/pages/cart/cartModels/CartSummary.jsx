import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import cart from '../../../assets/images/cart.svg'
import { getCart } from '../../../api/cart'
import { useAuth } from '../../../context/AuthContext'
import { Button } from './CartSummary'
export { Button, ErrorButton } from '../../../components/buttons/Primary'
const CartSummary = () => {
  const navigate = useNavigate()
  const { token } = useAuth()
  const getCartQuery = useQuery(['getCart', token], getCart)
  const data = getCartQuery.data
  const getTotal = () => {
    return data?.reduce((ac, cv) => (ac += cv.price * cv.qty), 0)
  }
  return (
    <>
      <div>
        <div>
          <h2>Continue to Purchase</h2>
          <hr />
          <div>
            <p>
              cart total: <strong>₹{getTotal()}</strong>
            </p>
            <p>
              shipping: <strong>₹500</strong>
            </p>
          </div>
          <div>
            <p>Have a cupon ?</p>
            <input type="text" />
            <Button varient="outline">Apply</Button>
          </div>
          <div>
            <p>
              SubTotal: <strong>₹{getTotal() + 500}</strong>
            </p>
          </div>
          <Button onClick={() => navigate('/checkout')}>Check Out</Button>
          <div>
            <img src={cart} height={'100%'} width={'100%'} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartSummary