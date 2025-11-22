import "./index.css"

import FocusScreen from "./04-useRef/FocusScreen.tsx"
// import { HooksApp } from "./HooksApp.tsx"
// import { TrafficLight } from "./01-useState/TrafficLight.tsx"
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect.tsx"
// import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook.tsx"
// import { PokemonPage } from "./03-examples/PokemonPage.tsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>
)
