import React from "react";
import { useState } from "react";

function MapeoViveSolo() {
  const [viveSoloSeleccionado, setViveSoloSeleccionado] = useState("si");
  const [viveSoloMapeado, setViveSoloMapeado] = useState(null);

  const mapeoViveSolo = {
    si: 3,
    no: 1,
  };

  const handleChangeViveSolo = (e) => {
    const nuevaRespuesta = e.target.value;
    setViveSoloSeleccionado(nuevaRespuesta);

    // Mapear la respuesta de 'vive solo'
    const mapeo = mapeoViveSolo[nuevaRespuesta];
    setViveSoloMapeado(mapeo);
  };

  return (
    <div>
      <select value={viveSoloSeleccionado} onChange={handleChangeViveSolo}>
        <option value='si'>Sí</option>
        <option value='no'>No</option>
      </select>

      {viveSoloMapeado !== null && (
        <div>Vive solo mapeado: {viveSoloMapeado}</div>
      )}
    </div>
  );
}

export default MapeoViveSolo;
