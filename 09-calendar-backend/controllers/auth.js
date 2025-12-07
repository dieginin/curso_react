const { response } = require("express")
const bcrypt = require("bcryptjs")
const Usuario = require("../models/Usuario")

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body

  try {
    let usuario = await Usuario.findOne({ email })
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      })
    }

    usuario = new Usuario(req.body)

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    await usuario.save()

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contacte al administrador",
    })
  }
}

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body

  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  })
}

const renovarToken = (req, res = response) => {
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
