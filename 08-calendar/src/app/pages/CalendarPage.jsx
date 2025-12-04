import "react-big-calendar/lib/css/react-big-calendar.css"

import { CalendarEvent, Navbar } from "../components"
import { getMessagesES, localizer } from "../../helpers"
import { useCallback, useState } from "react"

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
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState(localStorage.getItem("view") || "week")

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

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })
  }

  const onNavigate = useCallback((event) => setDate(event), [setDate])

  const onSelect = (event) => {
    console.log({ click: event })
  }

  const onView = (event) => {
    setView(event)
    localStorage.setItem("view", event)
  }

  return (
    <>
      <Navbar />
      <Calendar
        date={date}
        components={{
          event: CalendarEvent,
        }}
        culture='es'
        endAccessor='end'
        eventPropGetter={eventStyleGetter}
        events={events}
        localizer={localizer}
        messages={getMessagesES()}
        onDoubleClickEvent={onDoubleClick}
        onNavigate={onNavigate}
        onSelectEvent={onSelect}
        onView={onView}
        startAccessor='start'
        style={{ height: "calc(100vh - 56px)" }}
        view={view}
      />
    </>
  )
}
