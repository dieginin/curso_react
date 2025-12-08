import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
  onLogoutCalendar,
} from "../store"
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

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post("/auth/new", {
        name,
        email,
        password,
      })

      localStorage.setItem("token", data.token)
      localStorage.setItem("token-init-date", new Date().getTime())
      dispatch(onLogin({ uid: data.uid, name: data.name }))
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || ""))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogoutCalendar())
    dispatch(onLogout())
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token")
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await calendarApi.get("/auth/renew")

      localStorage.setItem("token", data.token)
      localStorage.setItem("token-init-date", new Date().getTime())
      dispatch(onLogin({ uid: data.uid, name: data.name }))
    } catch {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  }
}
