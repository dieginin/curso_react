import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"

import { FullScreenLoading } from "./components/shared/FullScreenLoading"
import type { PropsWithChildren } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router"
import { Toaster } from "sonner"
import { appRouter } from "./app.router"
import { checkAuthAction } from "./auth/actions/check-auth.action"

const queryClient = new QueryClient()

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  const { isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthAction,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5,
    refetchOnWindowFocus: true,
  })
  if (isLoading) return <FullScreenLoading />
  return children
}

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
