import { useState } from "react"

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  off: "bg-gray-400",
}

export function TrafficLight() {
  const [light, setLight] = useState("red")

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4'>
      <div className='flex flex-col items-center space-y-8'>
        <div
          className={`w-32 h-32 rounded-full ${
            light === "red" ? colors[light] : colors["off"]
          }`}
        />
        <div
          className={`w-32 h-32 rounded-full ${
            light === "yellow" ? colors[light] : colors["off"]
          }`}
        />
        <div
          className={`w-32 h-32 rounded-full ${
            light === "green" ? colors[light] : colors["off"]
          }`}
        />

        {/* Botón para cambiar el estado de la luz */}
        <div className='flex gap-2'>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer'
            onClick={() => setLight("red")}
          >
            Rojo
          </button>
          <button
            className='bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer'
            onClick={() => setLight("yellow")}
          >
            Amarillo
          </button>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer'
            onClick={() => setLight("green")}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  )
}
