import { useCounter } from "../hooks/useCounter"

export default function MyCounterApp() {
  const { counter, handleDecrement, handleReset, handleIncrement } =
    useCounter()

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>counter: {counter}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+1</button>
      </div>
    </div>
  )
}
