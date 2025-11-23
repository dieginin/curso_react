import { getUserAction } from "./api/get-user.action"
import { useEffect } from "react"

export const ClientInformation = ({ id }: { id: number }) => {
  useEffect(() => {
    getUserAction(id).then(console.log)
  }, [id])

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h2 className='text-4xl font-thin text-white'>Diego | #009</h2>

      <p className='text-2xl text-white'>Oregon, USA</p>
      <p className='text-xl text-white'>Un rol del usuario</p>
    </div>
  )
}
