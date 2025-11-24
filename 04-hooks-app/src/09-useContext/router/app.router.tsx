import { Navigate, createBrowserRouter } from "react-router"

import { AboutPage } from "../pages/about/AboutPage"
import { LoginPage } from "../pages/auth/LoginPage"
import { PrivateRoute } from "./PrivateRoute"
import { ProfilePage } from "../pages/profile/ProfilePage"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/profile",
    // element: <ProfilePage />,
    element: <PrivateRoute element={<ProfilePage />} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
])
