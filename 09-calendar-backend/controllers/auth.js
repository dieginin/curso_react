const { request, response } = require("express")

const crearUsuario = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "registro",
  })
}

const loginUsuario = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  })
}

const renovarToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  renovarToken,
}
