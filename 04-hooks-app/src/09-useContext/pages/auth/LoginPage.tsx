import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

export const LoginPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
      <hr />

      <form className='flex flex-col gap-2 my-10'>
        <Input type='number' placeholder='ID del usuario' />

        <Button type='submit'>Iniciar sesión</Button>
      </form>

      <Link to='/'>
        <Button variant='ghost'>Volver al about</Button>
      </Link>
    </div>
  )
}
