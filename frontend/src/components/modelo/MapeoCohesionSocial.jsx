import React from "react";
import { useState, useEffect } from "react";

function MapeoCohesionSocial() {
  const [cohesionSocialSeleccionado, setCohesionSocialSeleccionado] =
    useState("");

  const [cohesionSocial, setCohesionSocial] = useState(null);

  const mapeoCohesionSocial = {
    "baja cohesion": 1,
    "alta cohesion": 0,
  };

  const handleChangeRespuesta = (e) => {
    const nuevaRespuesta = e.target.value;
    setCohesionSocialSeleccionado(nuevaRespuesta);

    // Mapear la respuesta seleccionada
    const mapeo = mapeoCohesionSocial[nuevaRespuesta];
    setCohesionSocial(mapeo);
  };

  return (
    <div>
      <select
        value={cohesionSocialSeleccionado}
        onChange={handleChangeRespuesta}
      >
        <option value=''>selecciona una opción</option>
        <option value='baja cohesion'>Baja cohesion</option>
        <option value='alta cohesion'>Alta cohesion</option>
      </select>
      {cohesionSocial !== null && <div>Valor mapeado: {cohesionSocial}</div>}
    </div>
  );
}

export default MapeoCohesionSocial;
