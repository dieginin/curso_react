import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store"
import { useDispatch, useSelector } from "react-redux"

import { calendarApi } from "../api"

export const useCalendarStore = () => {
  const dispatch = useDispatch()

  const { activeEvent, events } = useSelector((state) => state.calendar)
  const { user } = useSelector((state) => state.auth)

  const setActiveEvent = (calendarEvent) =>
    dispatch(onSetActiveEvent(calendarEvent))

  const startSavingEvent = async (calendarEvent) => {
    // TODO: update event
    if (calendarEvent._id) {
      //* ACTUALIZANDO
      dispatch(onUpdateEvent(calendarEvent))
    } else {
      //* CREANDO
      const { data } = await calendarApi.post("/events", calendarEvent)

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }))
    }
  }

  const startDeletingEvent = async () => dispatch(onDeleteEvent())

  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Métodos
    setActiveEvent,
    startDeletingEvent,
    startSavingEvent,
  }
}
