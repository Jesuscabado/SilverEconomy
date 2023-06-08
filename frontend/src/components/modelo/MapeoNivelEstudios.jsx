import React from "react";
import { useState } from "react";

function MapeoNivelEstudios() {
  const [nivelEstudiosSeleccionado, setNivelEstudiosSeleccionado] =
    useState("sin estudios");
  const [nivelEstudiosMapeado, setNivelEstudiosMapeado] = useState(null);

  const mapeoNivelesEstudios = {
    "sin estudios": 4,
    primarios: 2,
    secundarios: 1,
    superiores: 0,
  };

  const handleChangeNivelEstudios = (e) => {
    const nuevoNivelEstudios = e.target.value;
    setNivelEstudiosSeleccionado(nuevoNivelEstudios);

    // Obtener el mapeo correspondiente al nuevo nivel de estudios seleccionado
    const mapeo = mapeoNivelesEstudios[nuevoNivelEstudios];
    setNivelEstudiosMapeado(mapeo);
  };

  return (
    <div>
      <select
        value={nivelEstudiosSeleccionado}
        onChange={handleChangeNivelEstudios}
      >
        {Object.keys(mapeoNivelesEstudios).map((nivelEstudios) => (
          <option key={nivelEstudios} value={nivelEstudios}>
            {nivelEstudios}
          </option>
        ))}
      </select>

      {nivelEstudiosMapeado !== null && (
        <div>Nivel de estudios mapeado: {nivelEstudiosMapeado}</div>
      )}
    </div>
  );
}

export default MapeoNivelEstudios;
