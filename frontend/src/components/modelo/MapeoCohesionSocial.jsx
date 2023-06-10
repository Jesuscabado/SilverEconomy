import React from "react";
import { useState } from "react";

function MapeoCohesionSocial({
  onCohesionSocialSeleccionado,
  onCohesionSocialMapeado,
}) {
  const [cohesionSocial, setCohesionSocial] = useState(null);

  const mapeoCohesionSocial = {
    "baja cohesion": 1,
    "alta cohesion": 0,
  };

  const handleChangeCohesionSocial = (e) => {
    const nuevaRespuesta = e.target.value;
    onCohesionSocialSeleccionado(nuevaRespuesta);

    // Mapear la respuesta seleccionada
    const mapeo = mapeoCohesionSocial[nuevaRespuesta];
    setCohesionSocial(mapeo);
    onCohesionSocialMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeCohesionSocial}>
        <option value=''>selecciona una opción</option>
        <option value='baja cohesion'>Baja cohesion</option>
        <option value='alta cohesion'>Alta cohesion</option>
      </select>
      {cohesionSocial !== null && <div>Valor mapeado: {cohesionSocial}</div>}
    </div>
  );
}

export default MapeoCohesionSocial;
