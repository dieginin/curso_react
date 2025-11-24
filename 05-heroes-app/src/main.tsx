import "./index.css"

import { Button } from "@/components/ui/button"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <Button>Hola Mundo</Button>
  </StrictMode>
)
