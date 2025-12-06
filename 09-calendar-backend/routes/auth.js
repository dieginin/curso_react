/*
    Rutas AUTH
    host + /api/auth
*/

const { Router } = require("express")
const router = Router()

const {
  crearUsuario,
  loginUsuario,
  renovarToken,
} = require("../controllers/auth")

router.post("/", loginUsuario)

router.post("/new", crearUsuario)

router.get("/renew", renovarToken)

module.exports = router
