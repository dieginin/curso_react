import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react"
import { users, type User } from "../data/user-mock.data"

type AuthStatusType = "checking" | "authenticated" | "non-authenticated"

interface UserContextProps {
  //! State
  authStatus: AuthStatusType
  user: User | null

  //! Methods
  login: (userId: number) => boolean
  logout: () => void
}

const UserContext = createContext({} as UserContextProps)

function UserContextProvider({ children }: PropsWithChildren) {
  const [authStatus, setAuthStatus] = useState<AuthStatusType>("checking")
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId)

    if (!user) {
      console.error(`User not found ${userId}`)
      setUser(null)
      setAuthStatus("non-authenticated")
      return false
    }
    setUser(user)
    setAuthStatus("authenticated")
    localStorage.setItem("userId", userId.toString())
    return true
  }
  const handleLogout = () => {
    setUser(null)
    setAuthStatus("non-authenticated")
    localStorage.removeItem("userId")
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")

    if (storedUserId) handleLogin(+storedUserId)
    handleLogout()
  }, [])

  const userContextValue = {
    authStatus: authStatus,
    user: user,
    login: handleLogin,
    logout: handleLogout,
  }

  return <UserContext value={userContextValue}>{children}</UserContext>
}

export { UserContext, UserContextProvider }
