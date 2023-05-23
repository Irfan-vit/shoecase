import { useAuth } from '../../context/AuthContext'
export default function Address({ props: { address } }) {
  const { setUserDetails, userDetails } = useAuth()
  return (
    <div>
      <h4>{address.name}</h4>
      <p>{e.mobile}</p>
      <p>{e.pin}</p>
      <p>{e.city}</p>
      <p>{e.location}</p>
      <p
        onClick={() => {
          setUserDetails({
            ...userDetails,
            address: userDetails.address.filter(
              (address) => address.id !== e.id,
            ),
          })
        }}
      >
        delete
      </p>
    </div>
  )
}
