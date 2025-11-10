import { useEffect, useState } from "react"

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  off: "bg-gray-400",
}

type TrafficLightColor = keyof typeof colors

export function TrafficLightWithEffect() {
  const [light, setLight] = useState<TrafficLightColor>("red")
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown === 0) return

    const intervalId = setInterval(() => setCountdown((prev) => prev - 1), 1000)

    return () => clearInterval(intervalId)
  }, [countdown])

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4'>
      <div className='flex flex-col items-center space-y-8'>
        <h1 className='text-white text-3xl font-thin'>
          Semáforo con useEffect
        </h1>
        <h2 className='text-white text-xl'>{countdown}</h2>
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
      </div>
    </div>
  )
}
