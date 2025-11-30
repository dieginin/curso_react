import { Link, useParams } from "react-router"
import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/shared/Logo"
import { cn } from "@/lib/utils"
import { useAuthStore } from "@/auth/store/auth.store"
import { useSearchInput } from "@/hooks/useSearchInput"

export const Header = () => {
  const { authStatus, logout, isAdmin } = useAuthStore()
  const { inputRef, query, handleSearch } = useSearchInput()

  const { gender } = useParams()

  return (
    <header className='sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50'>
      <div className='container px-4 mx-auto lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <Menu className='w-5 h-5' />
            </Button>
            <Logo />
          </div>

          {/* Navigation - Desktop */}
          <nav className='items-center hidden space-x-8 md:flex'>
            <Link
              to='/'
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                !gender && "underline underline-offset-4"
              )}
            >
              Todos
            </Link>
            <Link
              to='/gender/men'
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                gender === "men" && "underline underline-offset-4"
              )}
            >
              Hombres
            </Link>
            <Link
              to='/gender/women'
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                gender === "women" && "underline underline-offset-4"
              )}
            >
              Mujeres
            </Link>
            <Link
              to='/gender/kid'
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                gender === "kid" && "underline underline-offset-4"
              )}
            >
              Niños
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className='flex items-center space-x-4'>
            <div className='items-center hidden space-x-2 md:flex'>
              <div className='relative'>
                <Search className='absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground' />
                <Input
                  ref={inputRef}
                  placeholder='Buscar productos...'
                  className='w-64 bg-white pl-9 h-9'
                  onKeyDown={handleSearch}
                  defaultValue={query}
                />
              </div>
            </div>

            <Button variant='ghost' size='icon' className='md:hidden'>
              <Search className='w-5 h-5' />
            </Button>

            {authStatus === "non-authenticated" ? (
              <Link to='/auth/login'>
                <Button variant='default' size='sm' className='ml-2'>
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                variant='outline'
                size='sm'
                className='ml-2'
                onClick={logout}
              >
                Cerrar sesion
              </Button>
            )}

            {isAdmin() && (
              <Link to='admin'>
                <Button variant='destructive' size='sm' className='ml-2'>
                  Admin
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
