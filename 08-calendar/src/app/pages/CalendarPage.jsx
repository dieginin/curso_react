import "react-big-calendar/lib/css/react-big-calendar.css"

import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { addHours, format, getDay, parse, startOfWeek } from "date-fns"

import { Navbar } from "../components/Navbar"
import { enUS } from "date-fns/locale"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: "Cumpleaños del jefe",
    notas: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
  },
]

export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: "calc(100vh - 56px)" }}
      />
    </>
  )
}
