import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center p-6 min-h-svh bg-muted md:p-10'>
      <div className='w-full max-w-sm md:max-w-3xl'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
