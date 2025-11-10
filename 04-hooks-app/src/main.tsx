import "./index.css"

// import { HooksApp } from "./HooksApp.tsx"
// import { TrafficLight } from "./01-useState/TrafficLight.tsx"
import { StrictMode } from "react"
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect.tsx"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    <TrafficLightWithEffect />
  </StrictMode>
)
