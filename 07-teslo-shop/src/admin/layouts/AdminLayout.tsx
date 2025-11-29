import { Header } from "../components/Header"
import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"
import { useState } from "react"

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed)

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      <div className='flex-1 flex flex-col'>
        <Header />

        <main className='flex-1 p-6' children={<Outlet />} />
      </div>
    </div>
  )
}

export default AdminLayout
