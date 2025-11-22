import { useState } from "react"

export default function useCounter(initialValue = 1) {
  const [counter, setCounter] = useState(initialValue)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(Math.max(1, counter - 1))

  return { counter, increment, decrement }
}
