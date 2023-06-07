import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import moment from "moment"; // Importar Moment.js

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // clear date selection
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
      <div className='m-20'>
        <header
          className='text-xl font-bold'
          title='CALENDAR'
          subtitle='Full Calendar Interactive Page'
        />
        <div className='flex justify-between'>
          {/* CALENDAR SIDEBAR */}
          <div className='flex-1 bg-blue-500 p-4 rounded'>
            <h5 className='text-white'>Events</h5>
            <ul>
              {currentEvents.map((event) => (
                <li key={event.id} className='bg-green-500 my-2 rounded'>
                  <p className='text-white'>{event.title}</p>
                  <p>{moment(event.start).format("MMMM D, YYYY")}</p>{" "}
                  {/* Utilizar moment para formatear la fecha */}
                </li>
              ))}
            </ul>
          </div>
          {/* CALENDAR */}
          <div className='flex-1 ml-4'>
            <FullCalendar
              height='75vh'
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
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
