import { RouterProvider } from "react-router/dom"
import { appRouter } from "./router/app.router"

export const HeroesApp = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
