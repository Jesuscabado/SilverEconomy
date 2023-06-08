import React from "react";
import { useState } from "react";

function MapeoEstadoAnimo() {
  const [estadoAnimoSeleccionado, setEstadoAnimoSeleccionado] =
    useState("animo_bajo");
  const [estadoAnimoMapeado, setEstadoAnimoMapeado] = useState(null);

  const mapeoEstadoAnimo = {
    animo_bajo: 3,
    animo_medio: 1,
    animo_alto: 0,
  };

  const handleChangeEstadoAnimo = (e) => {
    const nuevoEstadoAnimo = e.target.value;
    setEstadoAnimoSeleccionado(nuevoEstadoAnimo);

    // Mapear el estado de ánimo seleccionado
    const mapeo = mapeoEstadoAnimo[nuevoEstadoAnimo];
    setEstadoAnimoMapeado(mapeo);
  };

  return (
    <div>
      <select
        value={estadoAnimoSeleccionado}
        onChange={handleChangeEstadoAnimo}
      >
        <option value='animo_bajo'>Ánimo Bajo</option>
        <option value='animo_medio'>Ánimo Medio</option>
        <option value='animo_alto'>Ánimo Alto</option>
      </select>

      {estadoAnimoMapeado !== null && (
        <div>Estado de ánimo mapeado: {estadoAnimoMapeado}</div>
      )}
    </div>
  );
}

export default MapeoEstadoAnimo;
