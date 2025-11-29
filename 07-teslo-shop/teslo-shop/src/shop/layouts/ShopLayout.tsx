import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Outlet } from "react-router"

export const ShopLayout = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
