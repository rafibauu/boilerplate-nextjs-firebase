import { useEffect } from 'react'
import { useUser } from './user'
import useFirebase from '../hooks/useFirebase'

export const AuthProvider = ({ children }) => {
  const firebase = useFirebase()
  const { auth } = firebase

  const user = useUser()
  const { isReady, setUser } = user

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser({ email: user.email, uid: user.uid });
      else setUser({ isReady: true });
    })
  }, [])

  if (!isReady) {
    return <p>Loading</p>
  }

  return children
}

export default AuthProvider
