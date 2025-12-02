import "./index.css"

import { CalendarApp } from "./CalendarApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalendarApp />
  </StrictMode>
)
