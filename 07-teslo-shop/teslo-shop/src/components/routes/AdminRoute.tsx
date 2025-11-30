import { Navigate } from "react-router"
import type { PropsWithChildren } from "react"
import { useAuthStore } from "@/auth/store/auth.store"

export const AdminRoute = ({ children }: PropsWithChildren) => {
  const { authStatus, isAdmin } = useAuthStore()

  if (authStatus === "checking") return
  if (authStatus === "non-authenticated") return <Navigate to='/auth/login' />
  if (!isAdmin()) return <Navigate to='/' />
  return children
}
