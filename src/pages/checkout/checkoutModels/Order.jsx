import { useQuery } from '@tanstack/react-query'
import { getCart } from '../../../api/cart'
import { useAuth } from '../../../context/AuthContext'
import { useUserData } from '../../../context/UserDataContext'
import { Button } from '../../../components/buttons/Primary'
const Order = () => {
  const { token } = useAuth()
  const { userData } = useUserData()
  const getCartQuery = useQuery(['getCart', token], getCart)
  const data = getCartQuery?.data
  const getTotal = () => {
    return data?.reduce((ac, cv) => (ac += cv.price * cv.qty), 0)
  }
  return (
    <>
      <div>
        <Button>Place Order</Button>
        <div>
          <p>
            Deliver To :{' '}
            {!userData?.currentAddress ? (
              'please select/add an address'
            ) : (
              <strong>{userData?.currentAddress?.name}</strong>
            )}
          </p>
          <p>{userData?.currentAddress?.location}</p>
          <p>{userData?.currentAddress?.city}</p>
          <p>{userData?.currentAddress?.pin}</p>
          <p>{userData?.currentAddress?.mobile}</p>
        </div>
        <div>
          <h4>Order Summary</h4>
          <p>items: {data?.length}</p>
          <p>shipping: {500}</p>
        </div>
        <div>
          <p>Order Total ₹{data?.length === 0 ? null : getTotal() + 500}</p>
        </div>
      </div>
    </>
  )
}
export default Order
