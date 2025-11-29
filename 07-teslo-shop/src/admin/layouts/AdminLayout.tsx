import { Header } from "../components/Header"
import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"
import { useState } from "react"

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed)

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      <div className='flex flex-col flex-1'>
        <Header />

        <main className='flex-1 p-6' children={<Outlet />} />
      </div>
    </div>
  )
}

export default AdminLayout
