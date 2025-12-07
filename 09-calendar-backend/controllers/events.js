const { response } = require("express")
const Evento = require("../models/Evento")

const actualizarEvento = (req, res = response) => {
  const { id } = req.params

  res.status(200).json({
    ok: true,
    msg: "Actualizar evento",
    id,
  })
}

const crearEvento = async (req, res = response) => {
  const newEvent = new Evento(req.body)

  try {
    newEvent.user = req.uid
    const evento = await newEvent.save()

    res.status(200).json({
      ok: true,
      evento,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contacte al administrador",
    })
  }
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
