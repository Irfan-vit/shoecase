import { Button } from '../../../components/buttons/Primary'
import { useUserData } from '../../../context/UserDataContext'
const Order = () => {
  const { userData } = useUserData()
  return (
    <>
      <div>
        <Button>Place Order</Button>
        <div>
          <p>
            Deliver To : <strong>{userData?.currentAddress?.name}</strong>
          </p>
          <p>{userData?.currentAddress?.location}</p>
          <p>{userData?.currentAddress?.city}</p>
          <p>{userData?.currentAddress?.pin}</p>
          <p>{userData?.currentAddress?.mobile}</p>
        </div>
        <div>
          <h4>Order Summary</h4>
          <span>items{2}</span>
          <span>shipping{500}</span>
        </div>
        <div>
          <p>Order Total</p>
        </div>
      </div>
    </>
  )
}
export default Order
