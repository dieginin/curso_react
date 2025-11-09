import "./index.css"

import { GifsApp } from "./GifsApp"
// import MyCounterApp from "./counter/components/MyCounterApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GifsApp />
    {/* <MyCounterApp /> */}
  </StrictMode>
)
