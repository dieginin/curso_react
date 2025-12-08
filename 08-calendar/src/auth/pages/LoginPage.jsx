import "./LoginPage.css"

import Swal from "sweetalert2"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useEffect } from "react"
import { useForm } from "../../hooks/useForm"

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
}

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
}

export const LoginPage = () => {
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields)
  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields)

  const { errorMessage, startLogin, startRegister } = useAuthStore()

  const loginSubmit = (event) => {
    event.preventDefault()
    startLogin({ email: loginEmail, password: loginPassword })
  }
  const registerSubmit = (event) => {
    event.preventDefault()
    if (registerPassword !== registerPassword2) {
      return Swal.fire(
        "Error en registro",
        "Contraseñas no son iguales",
        "error"
      )
    }

    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    })
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error")
    }
  }, [errorMessage])

  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-6 login-form-1'>
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className='form-group mb-2'>
              <input
                type='email'
                name='loginEmail'
                className='form-control'
                placeholder='Correo'
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                name='loginPassword'
                className='form-control'
                placeholder='Contraseña'
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className='d-grid gap-2'>
              <input type='submit' className='btnSubmit' value='Login' />
            </div>
          </form>
        </div>

        <div className='col-md-6 login-form-2'>
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className='form-group mb-2'>
              <input
                type='text'
                name='registerName'
                className='form-control'
                placeholder='Nombre'
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='email'
                name='registerEmail'
                className='form-control'
                placeholder='Correo'
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                name='registerPassword'
                className='form-control'
                placeholder='Contraseña'
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input
                type='password'
                name='registerPassword2'
                className='form-control'
                placeholder='Repita la contraseña'
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className='d-grid gap-2'>
              <input type='submit' className='btnSubmit' value='Crear cuenta' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
