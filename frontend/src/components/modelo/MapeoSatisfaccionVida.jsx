import React from "react";
import { useState } from "react";

function MapeoSatisfaccionVida() {
  const [satisfaccionSeleccionada, setSatisfaccionSeleccionada] = useState("");
  const [satisfaccionMapeada, setSatisfaccionMapeada] = useState(null);

  const mapearSatisfaccion = (satisfaccion) => {
    const mapeoSatisfaccion = {
      "poco satisfecho": 4,
      "satisfecho medio": 2,
      "muy satisfecho": 0,
    };

    return mapeoSatisfaccion[satisfaccion] || -1; // Devuelve el resultado mapeado o -1 si no se encuentra mapeo
  };

  const handleChangeSatisfaccion = (e) => {
    const nuevaSatisfaccion = e.target.value;
    setSatisfaccionSeleccionada(nuevaSatisfaccion);

    const mapeo = mapearSatisfaccion(nuevaSatisfaccion);
    setSatisfaccionMapeada(mapeo);
  };

  return (
    <div>
      <select
        value={satisfaccionSeleccionada}
        onChange={handleChangeSatisfaccion}
      >
        <option value=''>selecciona una opción</option>
        <option value='poco satisfecho'>Poco satisfecho</option>
        <option value='satisfecho medio'>Satisfecho medio</option>
        <option value='muy satisfecho'>Muy satisfecho</option>
      </select>

      {satisfaccionMapeada !== null && (
        <div>Satisfacción mapeada: {satisfaccionMapeada}</div>
      )}
    </div>
  );
}

export default MapeoSatisfaccionVida;
