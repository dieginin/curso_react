import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu"
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu"

import { cn } from "@/lib/utils"

const menuItems = [
  { to: "/", label: "Inicio" },
  { to: "/search", label: "Buscar personaje" },
]

export const CustomMenu = () => {
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                isActive(item.to) && "bg-slate-200",
                " rounded-md p-2"
              )}
            >
              <Link to={item.to}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
