import { useAuth } from '../../context/AuthContext'
export default function Address({ props: {  } }) {
  const { setUserDetails, userDetails } = useAuth()
  return (
    <div>
      <h4>{.name}</h4>
      <p>{.mobile}</p>
      <p>{.pin}</p>
      <p>{.city}</p>
      <p>{.location}</p>
      <p
        onClick={() => {
          setUserDetails({
            ...userDetails,
            address: userDetails.address.filter(
              (address) => address.id !== address.id,
            ),
          })
        }}
      >
        delete
      </p>
    </div>
  )
}
