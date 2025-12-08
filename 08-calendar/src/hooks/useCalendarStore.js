import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store"
import { useDispatch, useSelector } from "react-redux"

import { calendarApi } from "../api"
import { convertDatesToDateEvents } from "../helpers"

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

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events")
      const events = convertDatesToDateEvents(data.eventos)
      dispatch(onLoadEvents(events))
    } catch (error) {
      console.log("Error cargando eventos")
      console.log(error)
    }
  }

  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Métodos
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  }
}
