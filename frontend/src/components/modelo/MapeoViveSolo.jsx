import React from "react";
import { useState } from "react";

function MapeoViveSolo({ onViveSoloSeleccionado, onViveSoloMapeado }) {
  const [viveSoloMapeado, setViveSoloMapeado] = useState(null);

  const mapeoViveSolo = {
    si: 3,
    no: 1,
  };

  const handleChangeViveSolo = (e) => {
    const nuevaRespuesta = e.target.value;
    onViveSoloSeleccionado(nuevaRespuesta);

    // Mapear la respuesta de 'vive solo'
    const mapeo = mapeoViveSolo[nuevaRespuesta];
    setViveSoloMapeado(mapeo);
    onViveSoloMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeViveSolo}>
        <option value=''>selecciona una opción</option>
        <option value='si'>Sí</option>
        <option value='no'>No</option>
      </select>

      {/* {viveSoloMapeado !== null && (
        <div>Vive solo mapeado: {viveSoloMapeado}</div>
      )} */}
    </div>
  );
}

export default MapeoViveSolo;
