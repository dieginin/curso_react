import {
  BarChart3,
  Bell,
  ChevronLeft,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Link, useLocation } from "react-router"

import { Logo } from "@/components/shared/Logo"

interface Props {
  isCollapsed: boolean
  onToggle: () => void
}

export const Sidebar = ({ isCollapsed, onToggle }: Props) => {
  const { pathname } = useLocation()

  const menuItems = [
    { icon: Home, label: "Dashboard", to: "/admin" },
    { icon: BarChart3, label: "Productos", to: "/admin/products" },
    { icon: Users, label: "Usuarios" },
    { icon: ShoppingCart, label: "Orders" },
    { icon: FileText, label: "Reportes" },
    { icon: Bell, label: "Notificaciones" },
    { icon: Settings, label: "Ajustes" },
    { icon: HelpCircle, label: "Ayuda" },
  ]

  const isActiveRoute = (to: string) => to === pathname

  return (
    <div
      className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out h-18${
        isCollapsed ? "w-18" : "w-64"
      } flex flex-col`}
    >
      {/* Header */}
      <div className='flex items-center justify-between p-4 border-b border-gray-200 h-18'>
        {!isCollapsed && <Logo subtitle='Admin' />}

        <button
          onClick={onToggle}
          className='p-2 transition-colors rounded-lg hover:bg-gray-100'
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4'>
        <ul className='space-y-2'>
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={index}>
                <Link
                  to={item.to || "/admin"}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                    isActiveRoute(item.to || "")
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon size={20} className='shrink-0' />
                  {!isCollapsed && (
                    <span className='font-medium'>{item.label}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Profile */}
      {!isCollapsed && (
        <div className='p-4 border-t border-gray-200'>
          <div className='flex items-center p-3 space-x-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50'>
            <div className='flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-linear-to-br from-blue-500 to-purple-600'>
              JD
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-gray-900 truncate'>
                John Doe
              </p>
              <p className='text-xs text-gray-500 truncate'>john@company.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
