const { response } = require("express")

const actualizarEvento = (req, res = response) => {
  const { id } = req.params

  res.status(200).json({
    ok: true,
    msg: "Actualizar evento",
    id,
  })
}

const crearEvento = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Crear evento",
  })
}

const eliminarEvento = (req, res = response) => {
  const { id } = req.params

  res.status(200).json({
    ok: true,
    msg: "Obtener evento",
    id,
  })
}

const getEventos = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Obtener eventos",
  })
}

module.exports = {
  actualizarEvento,
  crearEvento,
  eliminarEvento,
  getEventos,
}
