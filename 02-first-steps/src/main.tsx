import { FirstStepsApp } from "./FirstStepsApp"
import { MyAwesomeApp } from "./MyAwesomeApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>
)
