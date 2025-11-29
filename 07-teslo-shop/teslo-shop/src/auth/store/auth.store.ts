import type { User } from "@/interfaces/user.interface"
import { create } from "zustand"
import { loginAction } from "../actions/login.action"

type AuthStatus = "authenticated" | "non-authenticated" | "checking"

interface AuthState {
  //  Properties
  authStatus: AuthStatus
  token: string | null
  user: User | null

  //  Getters

  //  Methods
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => {
  const loginUser = async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password)
      localStorage.setItem("token", data.token)
      set({ user: data.user, token: data.token })
      return true
    } catch {
      logoutUser()
      return false
    }
  }

  const logoutUser = () => {
    localStorage.removeItem("token")
    set({ user: null, token: null })
  }

  return {
    authStatus: "checking",
    token: null,
    user: null,
    login: loginUser,
    logout: logoutUser,
  }
})
