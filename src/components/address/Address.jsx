import { useAuth } from '../../context/AuthContext'
export default function Address(props) {
  const { setUserDetails, userDetails } = useAuth()
  return (
    <div>
      <h4>{props.user.name}</h4>
      <p>{props.user.mobile}</p>
      <p>{props.user.pin}</p>
      <p>{props.user.city}</p>
      <p>{props.user.location}</p>
      <p
        onClick={() => {
          setUserDetails({
            ...userDetails,
            address: userDetails.address.filter(
              (address) => address.id !== props.user.id,
            ),
          })
        }}
      >
        delete
      </p>
    </div>
  )
}
