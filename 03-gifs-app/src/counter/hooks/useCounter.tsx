import { useState } from "react"

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue)

  const handleDecrement = () => setCounter(Math.max(0, counter - 1))
  const handleReset = () => setCounter(initialValue)
  const handleIncrement = () => setCounter(counter + 1)

  return { counter, handleDecrement, handleReset, handleIncrement }
}
