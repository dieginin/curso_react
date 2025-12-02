import { AppRouter } from "./app.router"
import { BrowserRouter } from "react-router"

export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
