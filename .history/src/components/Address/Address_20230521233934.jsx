import { useAuth } from '../../context/AuthContext'
export default function Address({ props: { user } }) {
  const { setUserDetails, userDetails } = useAuth()
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.mobile}</p>
      <p>{user.pin}</p>
      <p>{user.city}</p>
      <p>{user.location}</p>
      <p
        onClick={() => {
          setUserDetails({
            ...userDetails,
            address: userDetails.address.filter(
              (address) => address.id !== user.id,
            ),
          })
        }}
      >
        delete
      </p>
    </div>
  )
}
