import toast from 'react-hot-toast'
const login = () =>
  toast.success('Here is your toast.', {
    duration: 4000,
    position: 'top-center',
  })

export { login }
