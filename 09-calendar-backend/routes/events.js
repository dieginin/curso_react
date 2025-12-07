/*
    Rutas EVENTS
    host + /api/events
*/

const { Router } = require("express")
const router = Router()
const { check } = require("express-validator")

const {
  actualizarEvento,
  crearEvento,
  eliminarEvento,
  getEventos,
} = require("../controllers/events")
const { validarJWT } = require("../middlewares/validar-jwt")

router.use(validarJWT)

router.get("/", getEventos)

router.post("/", crearEvento)

router.put("/:id", actualizarEvento)

router.delete("/:id", eliminarEvento)

module.exports = router
