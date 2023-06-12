const express = require("express");
const router = express.Router();
const connection = require("../config/mysql");

// Obtener todos los eventos
router.get("/events", async (req, res) => {
  try {
    const events = await EventModel.find(); // Asume que tienes un modelo de eventos llamado "EventModel"
    res.json(events);
  } catch (error) {
    console.error("Error al obtener los eventos:", error);
    res.status(500).json({ error: "Error al obtener los eventos" });
  }
});

// Crear un nuevo evento
router.post("/events", (req, res) => {
  const { title, start, end } = req.body;
  const query = "INSERT INTO events (title, start, end) VALUES (?, ?, ?)";
  const values = [title, start, end];

  connection.query(query, values, (error, result) => {
    if (error) {
      res.status(400).json({ error: "Error al crear el evento" });
    } else {
      res.status(201).json({ id: result.insertId, title, start, end });
    }
  });
});

// Eliminar un evento
router.delete("/events/:id", (req, res) => {
  const eventId = req.params.id;
  const query = "DELETE FROM events WHERE id = ?";

  connection.query(query, eventId, (error, result) => {
    if (error) {
      res.status(500).json({ error: "Error al eliminar el evento" });
    } else {
      res.json({ id: eventId });
    }
  });
});

module.exports = router;
