import type { User } from "@/interfaces/user.interface"
import { checkAuthAction } from "../actions/check-auth.action"
import { create } from "zustand"
import { loginAction } from "../actions/login.action"

type AuthStatus = "authenticated" | "non-authenticated" | "checking"

interface AuthState {
  //  Properties
  authStatus: AuthStatus
  token: string | null
  user: User | null

  //  Getters
  isAdmin: () => boolean

  //  Methods
  checkAuthStatus: () => Promise<boolean>
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set, get) => {
  const isAdmin = () => !!get().user?.roles.includes("admin")

  const checkAuthentication = async () => {
    try {
      const { user, token } = await checkAuthAction()
      set({ user, token, authStatus: "authenticated" })
      return true
    } catch {
      set({ user: null, token: null, authStatus: "non-authenticated" })
      return false
    }
  }

  const loginUser = async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password)
      localStorage.setItem("token", data.token)
      set({ user: data.user, token: data.token, authStatus: "authenticated" })
      return true
    } catch {
      logoutUser()
      return false
    }
  }

  const logoutUser = () => {
    localStorage.removeItem("token")
    set({ user: null, token: null, authStatus: "non-authenticated" })
  }

  return {
    authStatus: "checking",
    token: null,
    user: null,

    isAdmin: isAdmin,

    checkAuthStatus: checkAuthentication,
    login: loginUser,
    logout: logoutUser,
  }
})
