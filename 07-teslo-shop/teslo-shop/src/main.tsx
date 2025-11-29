import "./index.css"

import { StrictMode } from "react"
import { TesloShopApp } from "./TesloShopApp"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TesloShopApp />
  </StrictMode>
)
