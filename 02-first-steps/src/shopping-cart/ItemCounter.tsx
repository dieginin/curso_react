import "./ItemCounter.css"

import { useState } from "react"

interface Props {
  name: string
  quantity?: number
}

export default function ItemCounter({ name, quantity = 1 }: Props) {
  const [count, setCount] = useState(quantity)

  const handleDecrement = () => setCount(Math.max(0, count - 1))
  const handleIncrement = () => setCount(count + 1)

  return (
    <section className='item-row'>
      <span
        className='item-text'
        style={{ color: count === 0 ? "red" : "black" }}
      >
        {name}
      </span>
      <button onClick={handleDecrement}>
        <small>-1</small>
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <small>+1</small>
      </button>
    </section>
  )
}
