import { useAuth } from '../../context/AuthContext'
export default function Address({ props: { address } }) {
  const { setUserDetails, userDetails } = useAuth()
  return (
    <div>
      <h4>{address.name}</h4>
      <p>{address.mobile}</p>
      <p>{address.pin}</p>
      <p>{address.city}</p>
      <p>{address.location}</p>
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
