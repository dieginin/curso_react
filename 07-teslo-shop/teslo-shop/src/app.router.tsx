import { Navigate, createBrowserRouter, type RouteObject } from "react-router"

import { AdminProductPage } from "./admin/pages/product/AdminProductPage"
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage"
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage"
import { GenderPage } from "./shop/pages/gender/GenderPage"
import { HomePage } from "./shop/pages/home/HomePage"
import { LoginPage } from "./auth/pages/login/LoginPage"
import { ProductPage } from "./shop/pages/product/ProductPage"
import { RegisterPage } from "./auth/pages/register/RegisterPage"
import { ShopLayout } from "./shop/layouts/ShopLayout"
import { lazy } from "react"

const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"))
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"))

const mainRoutes: RouteObject = {
  path: "/",
  element: <ShopLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "product/:idSlug",
      element: <ProductPage />,
    },
    {
      path: "gender/:gender",
      element: <GenderPage />,
    },
  ],
}

const authRoutes: RouteObject = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      index: true,
      element: <Navigate to='/auth/login' />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
}

const adminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: "products",
      element: <AdminProductsPage />,
    },
    {
      path: "products/:id",
      element: <AdminProductPage />,
    },
  ],
}

const notFoundRoute: RouteObject = {
  path: "*",
  element: <Navigate to='/' />,
}

export const appRouter = createBrowserRouter([
  mainRoutes,
  authRoutes,
  adminRoutes,
  notFoundRoute,
])
