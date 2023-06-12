import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import moment from "moment";
import "../../css/Calendar.css"; // Importar el archivo CSS aquí
import Navbar from "../Navbar";
import SideBar from "../SideBar";

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  /*   useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/events");
      const events = await response.json();
      setCurrentEvents(events);
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  }; */

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div>
      <Navbar />
      <SideBar />
      <div className='m-20'>
        <header className='text-2xl font-bold mb-4'>CALENDAR</header>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='bg-gray-500 p-4 rounded'>
            <h5 className='text-white mb-2'>Events</h5>
            <ul>
              {currentEvents.map((event) => (
                <li key={event.id} className='bg-green-500 my-2 rounded p-2'>
                  <p className='text-white'>{event.title}</p>
                  <p className='text-gray-200 text-sm'>
                    {moment(event.start).format("MMMM D, YYYY")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className='ml-4'>
            <FullCalendar
              height='75vh'
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today ",
                center: "title",
                right: "dayGridMonth",
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  start: "2022-09-14",
                },
                {
                  id: "5123",
                  title: "Timed event",
                  start: "2022-09-28",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
