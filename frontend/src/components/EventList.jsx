import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  };

  return (
    <div>
      <h2>Eventos:</h2>
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.title}</p>
          <p>{event.start}</p>
          <p>{event.end}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
