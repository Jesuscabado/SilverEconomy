import React from "react";
import { useState } from "react";

function MapeoAscensor() {
  const [ascensorSeleccionado, setAscensorSeleccionado] = useState("si");
  const [ascensorMapeado, setAscensorMapeado] = useState(null);

  const mapeoAscensor = {
    si: 0,
    no: 2,
  };

  const handleChangeAscensor = (e) => {
    const nuevoAscensor = e.target.value;
    setAscensorSeleccionado(nuevoAscensor);

    // Mapear el valor de ascensor
    const mapeo = mapeoAscensor[nuevoAscensor];
    setAscensorMapeado(mapeo);
  };

  return (
    <div>
      <select value={ascensorSeleccionado} onChange={handleChangeAscensor}>
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
