import React, { useState } from "react";

function MapeoEstadoCivil({ onEstadoCivilSeleccionado, onEstadoCivilMapeado }) {
  const [estadoCivilMapeado, setEstadoCivilMapeado] = useState(null);

  const mapeoEstadoCivil = {
    viudo: 4,
    soltero: 2,
    separado: 1,
    divorciado: 1,
    casado: 0,
  };

  const handleChangeEstadoCivil = (e) => {
    const nuevoEstadoCivil = e.target.value;
    onEstadoCivilSeleccionado(nuevoEstadoCivil);

    // Mapear el estado civil seleccionado
    const mapeo = mapeoEstadoCivil[nuevoEstadoCivil];
    setEstadoCivilMapeado(mapeo);
    onEstadoCivilMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeEstadoCivil}>
        <option value=''>selecciona una opción</option>
        {Object.keys(mapeoEstadoCivil).map((estadoCivil) => (
          <option key={estadoCivil} value={estadoCivil}>
            {estadoCivil}
          </option>
        ))}
      </select>

      {/* {estadoCivilMapeado !== null && (
        <div>Estado civil mapeado: {estadoCivilMapeado}</div>
      )} */}
    </div>
  );
}

export default MapeoEstadoCivil;
