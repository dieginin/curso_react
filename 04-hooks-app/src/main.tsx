import "./index.css"

import { HooksApp } from "./HooksApp.tsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>
)
