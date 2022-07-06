import { UserProvider } from '../context/user'
import { AuthProvider } from '../context/auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </UserProvider>
  )
}

export default MyApp
