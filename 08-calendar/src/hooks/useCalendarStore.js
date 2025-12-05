import { useSelector } from "react-redux"

export const useCalendarStore = () => {
  const { activeEvents, events } = useSelector((state) => state.calendar)

  return {
    //* Propiedades
    activeEvents,
    events,

    //* Métodos
  }
}
