import React from "react";
import { useState } from "react";

function MapeoAscensor({ onAscensorSeleccionado, onAscensorMapeado }) {
  const [ascensorMapeado, setAscensorMapeado] = useState(null);

  const mapeoAscensor = {
    si: 0,
    no: 2,
  };

  const handleChangeAscensor = (e) => {
    const nuevoAscensor = e.target.value;
    onAscensorSeleccionado(nuevoAscensor);

    // Mapear el valor de ascensor
    const mapeo = mapeoAscensor[nuevoAscensor];
    setAscensorMapeado(mapeo);
    onAscensorMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeAscensor}>
        <option value=''>selecciona una opción</option>
        <option value='si'>Si</option>
        <option value='no'>No</option>
      </select>

      {ascensorMapeado !== null && (
        <div>Ascensor mapeado: {ascensorMapeado}</div>
      )}
    </div>
  );
}

export default MapeoAscensor;
