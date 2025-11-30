import { Navigate } from "react-router"
import type { PropsWithChildren } from "react"
import { useAuthStore } from "@/auth/store/auth.store"

export const AuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthStore()

  if (authStatus === "checking") return
  if (authStatus === "non-authenticated") return <Navigate to='/auth/login' />
  return children
}
