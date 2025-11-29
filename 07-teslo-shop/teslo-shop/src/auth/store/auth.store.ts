import type { User } from "@/interfaces/user.interface"
import { create } from "zustand"
import { loginAction } from "../actions/login.action"

interface AuthState {
  //  Properties
  user: User | null
  token: string | null

  //  Getters
  //  Methods
  login: (email: string, password: string) => Promise<boolean>
}

export const useAuthStore = create<AuthState>()((set) => {
  const loginUser = async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password)
      localStorage.setItem("token", data.token)
      set({ user: data.user, token: data.token })
      return true
    } catch {
      localStorage.removeItem("token")
      set({ user: null, token: null })
      return false
    }
  }

  return {
    user: null,
    token: null,
    login: loginUser,
  }
})
