import { MySubtitle } from "./ui/MySubtitle"
import { MyTitle } from "./ui/MyTitle"
import { useState } from "react"

export default function MemoHook() {
  const [title, setTitle] = useState("Mi Titulo")
  const [subtitle, setSubTitle] = useState("Mi Subtitulo")

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>MemoHook</h1>

      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} />

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setTitle("Hello, " + new Date().getTime())}
      >
        Cambiar Titulo
      </button>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setSubTitle("World")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  )
}
