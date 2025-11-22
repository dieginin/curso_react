import { useRef } from "react"

export default function FocusScreen() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputFocus = () => inputRef.current?.focus()
  const handleInputSelection = () => inputRef.current?.select()

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>FocusScreen</h1>

      <input
        ref={inputRef}
        type='text'
        className='bg-white text-black px-4 py-2 rounded-md'
        autoFocus
      />

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={handleInputFocus}
      >
        Set Focus
      </button>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={handleInputSelection}
      >
        Set Focus and Select
      </button>
    </div>
  )
}
