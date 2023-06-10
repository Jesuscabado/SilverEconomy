import React from "react";
import { useState } from "react";

function MapeoNivelEstudios({
  onNivelEstudiosSeleccionado,
  onNivelEstudiosMapeado,
}) {
  const [nivelEstudiosMapeado, setNivelEstudiosMapeado] = useState(null);

  const mapeoNivelesEstudios = {
    "sin estudios": 4,
    primarios: 2,
    secundarios: 1,
    superiores: 0,
  };

  const handleChangeNivelEstudios = (e) => {
    const nuevoNivelEstudios = e.target.value;
    onNivelEstudiosSeleccionado(nuevoNivelEstudios);

    // Obtener el mapeo correspondiente al nuevo nivel de estudios seleccionado
    const mapeo = mapeoNivelesEstudios[nuevoNivelEstudios];
    setNivelEstudiosMapeado(mapeo);
    onNivelEstudiosMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeNivelEstudios}>
        <option value=''>selecciona una opción</option>
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
