import { Button } from "@/components/ui/button"
import { useContext, useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { UserContext } from "@/09-useContext/context/UserContext"
import { toast } from "sonner"

export const LoginPage = () => {
  const [userId, setUserId] = useState("")
  const { login } = useContext(UserContext)

  const navigation = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = login(+userId)

    if (!result) {
      toast.error("Usuario no encontrado")
      return
    }

    navigation("/profile")
  }

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
      <hr />

      <form className='flex flex-col gap-2 my-10' onSubmit={handleSubmit}>
        <Input
          type='number'
          placeholder='ID del usuario'
          value={userId}
          onChange={({ target }) => setUserId(target.value)}
        />

        <Button type='submit'>Iniciar sesión</Button>
      </form>

      <Link to='/'>
        <Button variant='ghost'>Volver al about</Button>
      </Link>
    </div>
  )
}
