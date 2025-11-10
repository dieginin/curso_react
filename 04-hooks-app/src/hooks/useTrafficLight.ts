import { useEffect, useState } from "react"

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
}

const inactiveColor = "bg-gray-400"

type TrafficLightColor = keyof typeof colors

export function useTrafficLight(initialColor: TrafficLightColor = "red") {
  const [light, setLight] = useState<TrafficLightColor>(initialColor)
  const [countdown, setCountdown] = useState(5)

  // Countdown Effect
  useEffect(() => {
    if (countdown === 0) return

    const intervalId = setInterval(() => setCountdown((prev) => prev - 1), 1000)

    return () => clearInterval(intervalId)
  }, [countdown])

  // Change light Effect
  useEffect(() => {
    if (countdown > 0) return

    setCountdown(5)

    if (light === "red") return setLight("green")
    if (light === "yellow") return setLight("red")
    if (light === "green") return setLight("yellow")
  }, [countdown, light])

  return {
    // Props
    countdown,

    // Computed
    percentage: (countdown / 5) * 100,
    redLight: light === "red" ? colors.red : inactiveColor,
    yellowLight: light === "yellow" ? colors.yellow : inactiveColor,
    greenLight: light === "green" ? colors.green : inactiveColor,
  }
}
