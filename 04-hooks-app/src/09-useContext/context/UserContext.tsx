import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data"

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

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatusType>("checking")
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (id: number) => id === id
  const handleLogout = () => {}

  const userContextValue = {
    authStatus: authStatus,
    user: user,
    login: handleLogin,
    logout: handleLogout,
  }

  return <UserContext value={userContextValue}>{children}</UserContext>
}
