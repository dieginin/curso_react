import "./index.css"

import { GifsApp } from "./GifsApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GifsApp />
  </StrictMode>
)
