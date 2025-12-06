import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store"
import { useDispatch, useSelector } from "react-redux"

export const useCalendarStore = () => {
  const dispatch = useDispatch()

  const { activeEvent, events } = useSelector((state) => state.calendar)

  const setActiveEvent = (calendarEvent) =>
    dispatch(onSetActiveEvent(calendarEvent))

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend
    // Todo bien
    if (calendarEvent._id) {
      //* ACTUALIZANDO
      dispatch(onUpdateEvent(calendarEvent))
    } else {
      //* CREANDO
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime }))
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
