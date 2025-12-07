const { response } = require("express")
const Evento = require("../models/Evento")

const actualizarEvento = async (req, res = response) => {
  const { id } = req.params
  const { uid } = req

  try {
    const evento = await Evento.findById(id)

    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe con ese id",
      })
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento",
      })
    }

    const newEvent = {
      ...req.body,
      user: uid,
    }
    const updatedEvent = await Evento.findByIdAndUpdate(id, newEvent, {
      new: true,
    })

    res.status(200).json({
      ok: true,
      evento: updatedEvent,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contacte al administrador",
    })
  }
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

const eliminarEvento = async (req, res = response) => {
  const { id } = req.params
  const { uid } = req

  try {
    const evento = await Evento.findById(id)

    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe con ese id",
      })
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de eliminar este evento",
      })
    }

    await Evento.findByIdAndDelete(id)

    res.status(200).json({ ok: true })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contacte al administrador",
    })
  }
}

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name")

  res.status(200).json({
    ok: true,
    eventos,
  })
}

module.exports = {
  actualizarEvento,
  crearEvento,
  eliminarEvento,
  getEventos,
}
