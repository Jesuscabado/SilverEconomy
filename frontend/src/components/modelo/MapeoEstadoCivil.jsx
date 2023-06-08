import React from "react";
import { useState } from "react";

function MapeoEstadoCivil() {
  const [estadoCivilSeleccionado, setEstadoCivilSeleccionado] =
    useState("soltero");
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
    setEstadoCivilSeleccionado(nuevoEstadoCivil);

    // Mapear el estado civil seleccionado
    const mapeo = mapeoEstadoCivil[nuevoEstadoCivil];
    setEstadoCivilMapeado(mapeo);
  };

  return (
    <div>
      <select
        value={estadoCivilSeleccionado}
        onChange={handleChangeEstadoCivil}
      >
        {Object.keys(mapeoEstadoCivil).map((estadoCivil) => (
          <option key={estadoCivil} value={estadoCivil}>
            {estadoCivil}
          </option>
        ))}
      </select>

      {estadoCivilMapeado !== null && (
        <div>Estado civil mapeado: {estadoCivilMapeado}</div>
      )}
    </div>
  );
}

export default MapeoEstadoCivil;
