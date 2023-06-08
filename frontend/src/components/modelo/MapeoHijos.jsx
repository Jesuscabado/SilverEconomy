import React from "react";
import { useState } from "react";

function MapeoHijos() {
  const [hijosSeleccionado, setHijosSeleccionado] = useState("si");
  const [valorMapeado, setValorMapeado] = useState(null);

  const mapeoHijos = {
    si: 0,
    no: 2,
  };

  const handleChangeRespuesta = (e) => {
    const nuevaRespuesta = e.target.value;
    setHijosSeleccionado(nuevaRespuesta);

    // Mapear la respuesta seleccionada
    const mapeo = mapeoHijos[nuevaRespuesta];
    setValorMapeado(mapeo);
  };

  return (
    <div>
      <select value={hijosSeleccionado} onChange={handleChangeRespuesta}>
        <option value='si'>Sí</option>
        <option value='no'>No</option>
      </select>

      {valorMapeado !== null && <div>Valor mapeado: {valorMapeado}</div>}
    </div>
  );
}

export default MapeoHijos;
