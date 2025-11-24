import "./index.css"

import { HeroesApp } from "./HeroesApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>
)
