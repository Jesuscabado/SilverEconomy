import React from "react";
import { useState } from "react";

function MapeoLimitacionFisica({
  onLimFisicaSeleccionada,
  onLimiFisicaMapeada,
}) {
  const [limFisicaMapeada, setLimFisicaMapeada] = useState(null);

  const mapeoLimFisica = {
    "nada limitado": 0,
    "limitado no grave": 2,
    "limitado grave": 4,
  };

  const handleChangeLimFisica = (e) => {
    const nuevaLimFisica = e.target.value;
    onLimFisicaSeleccionada(nuevaLimFisica);

    // Mapear la limitación física seleccionada
    const mapeo = mapeoLimFisica[nuevaLimFisica];
    setLimFisicaMapeada(mapeo);
    onLimiFisicaMapeada(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeLimFisica}>
        <option value="">selecciona una opción</option>
        <option value="nada limitado">Nada limitado</option>
        <option value="limitado no grave">Limitado no grave</option>
        <option value="limitado grave">Limitado grave</option>
      </select>

      {limFisicaMapeada !== null && (
        <div>Limitación física mapeada: {limFisicaMapeada}</div>
      )}
    </div>
  );
}

export default MapeoLimitacionFisica;
