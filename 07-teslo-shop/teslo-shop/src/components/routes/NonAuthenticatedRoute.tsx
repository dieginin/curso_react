import { Navigate } from "react-router"
import type { PropsWithChildren } from "react"
import { useAuthStore } from "@/auth/store/auth.store"

export const NonAuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthStore()

  if (authStatus === "checking") return
  if (authStatus === "authenticated") return <Navigate to='/' />
  return children
}
