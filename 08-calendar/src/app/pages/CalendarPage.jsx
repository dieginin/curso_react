import "react-big-calendar/lib/css/react-big-calendar.css"

import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from "../components"
import { getMessagesES, localizer } from "../../helpers"
import { useAuthStore, useCalendarStore, useUiStore } from "../../hooks"
import { useCallback, useEffect, useState } from "react"

import { Calendar } from "react-big-calendar"

export const CalendarPage = () => {
  const { user } = useAuthStore()
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState(localStorage.getItem("view") || "week")

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = user.uid === event.user._id || user.uid === event.user.uid
    const style = {
      backgroundColor: isMyEvent ? "#347CF7" : "#465660",
      borderRadius: "0px",
      color: "white",
      opacity: 0.8,
    }

    return {
      style,
    }
  }

  const onNavigate = useCallback((event) => setDate(event), [setDate])

  const onView = (event) => {
    setView(event)
    localStorage.setItem("view", event)
  }

  useEffect(() => {
    startLoadingEvents()
  }, [])

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
        onDoubleClickEvent={openDateModal}
        onNavigate={onNavigate}
        onSelectEvent={setActiveEvent}
        onView={onView}
        startAccessor='start'
        style={{ height: "calc(100vh - 56px)" }}
        view={view}
      />
      <CalendarModal />

      <FabDelete />
      <FabAddNew />
    </>
  )
}
