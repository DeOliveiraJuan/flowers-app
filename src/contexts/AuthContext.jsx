import { createContext, useState, useContext, useEffect } from 'react'
import { setToken, getAccessToken, logout } from '../store/AccessTokenStore'
import { getCurrentUser } from '../services/UserService'
import { verifyJWT } from '../helpers/jwtHelpers'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [isAuthFetched, setIsAuthFetched] = useState(false)

  const login = (token) => {
    setToken(token)

    getUser()
  }

  const getUser = (cb) => {
    getCurrentUser()
      .then(user => {
        setUser(user)
        setIsAuthFetched(true)
      })
  }

  useEffect(() => {
    if (getAccessToken()) {
      if (!verifyJWT(getAccessToken())) {
        logout()
      } else {
        getUser()
      }
    } else {
      setIsAuthFetched(true)
    }
  }, [])

  const value = {
    user,
    login,
    getUser,
    isAuthFetched
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;