import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store"
import { useDispatch, useSelector } from "react-redux"

import { calendarApi } from "../api"

export const useAuthStore = () => {
  const { errorMessage, status, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post("/auth", { email, password })

      localStorage.setItem("token", data.token)
      localStorage.setItem("token-init-date", new Date().getTime())
      dispatch(onLogin({ uid: data.uid, name: data.name }))
    } catch {
      dispatch(onLogout("Credenciales incorrectas"))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    startLogin,
  }
}
