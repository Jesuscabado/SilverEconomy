import React from "react";
import { useState } from "react";

function MapeoHijos({ onHijosSeleccionado, onHijosMapeado }) {
  const [HijosMapeado, setHijosMapeado] = useState(null);

  const mapeoHijos = {
    si: 0,
    no: 2,
  };

  const handleChangeRespuesta = (e) => {
    const nuevaRespuesta = e.target.value;
    onHijosSeleccionado(nuevaRespuesta);

    // Mapear la respuesta seleccionada
    const mapeo = mapeoHijos[nuevaRespuesta];
    setHijosMapeado(mapeo);
    onHijosMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeRespuesta}>
        <option value=''>selecciona una opción</option>
        {Object.keys(mapeoHijos).map((hijos) => (
          <option key={hijos} value={hijos}>
            {hijos}
          </option>
        ))}
      </select>

      {HijosMapeado !== null && <div>valor mapeado: {HijosMapeado}</div>}
    </div>
  );
}

export default MapeoHijos;
