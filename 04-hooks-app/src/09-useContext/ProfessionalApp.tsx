import { RouterProvider } from "react-router/dom"
import { UserContextProvider } from "./context/UserContext"
import { appRouter } from "./router/app.router"

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className='bg-gradient flex flex-col'>
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  )
}
