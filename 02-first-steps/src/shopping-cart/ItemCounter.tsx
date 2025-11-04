import { useState } from "react"

interface Props {
  name: string
  quantity: number
}

export default function ItemCounter({ name, quantity }: Props) {
  const [count, setCount] = useState(quantity)

  const handleDecrement = () => setCount(Math.max(0, count - 1))
  const handleIncrement = () => setCount(count + 1)

  return (
    <section
      style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}
    >
      <span style={{ width: 150 }}>{name}</span>
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
