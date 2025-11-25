import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { FavoritesProvider } from "./context/Favorites.context"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router/dom"
import { appRouter } from "./router/app.router"

const queryClient = new QueryClient()

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={appRouter} />
      </FavoritesProvider>
    </QueryClientProvider>
  )
}
