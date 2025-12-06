const express = require("express")

// * Crear servidor
const app = express()

// * Rutas
app.get("/", (req, res) => {
  res.json({
    ok: true,
  })
})

// * Escuchar peticiones
app.listen(4995, () => console.log(`Servidor corriendo en puerto ${4995}`))
