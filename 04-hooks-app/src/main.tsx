import "./index.css"

// import { HooksApp } from "./HooksApp.tsx"
import { StrictMode } from "react"
import { TrafficLight } from "./01-useState/TrafficLight.tsx"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLight />
  </StrictMode>
)
