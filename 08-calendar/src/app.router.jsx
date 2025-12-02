import { Navigate, Route, Routes } from "react-router"

import { CalendarPage } from "./app/pages/CalendarPage"
import { LoginPage } from "./auth/pages/LoginPage"

export const AppRouter = () => {
  const authStatus = "not-authenticated"

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path='/auth/*' element={<LoginPage />} />
      ) : (
        <Route path='/*' element={<CalendarPage />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
