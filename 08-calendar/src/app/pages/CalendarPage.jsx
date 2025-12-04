import "react-big-calendar/lib/css/react-big-calendar.css"

import { CalendarEvent, Navbar } from "../components"
import { getMessagesES, localizer } from "../../helpers"

import { Calendar } from "react-big-calendar"
import { addHours } from "date-fns"

const events = [
  {
    title: "Cumpleaños del jefe",
    notas: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: " Diego",
    },
  },
]

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      color: "white",
      opacity: 0.8,
    }

    return {
      style,
    }
  }

  return (
    <>
      <Navbar />
      <Calendar
        defaultView='week'
        components={{
          event: CalendarEvent,
        }}
        culture='es'
        endAccessor='end'
        eventPropGetter={eventStyleGetter}
        events={events}
        localizer={localizer}
        messages={getMessagesES()}
        startAccessor='start'
        style={{ height: "calc(100vh - 56px)" }}
      />
    </>
  )
}
