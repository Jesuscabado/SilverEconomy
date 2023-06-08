import React from "react";
import { useState } from "react";

function MapeoActividadFisica() {
  const [nivelActividad, setNivelActividad] = useState("sedentario");
  const [mapeoActividad, setMapeoActividad] = useState(null);

  const mapeo_act_fisica = {
    sedentario: 4,
    moderado: 3,
    activo: 1,
    "muy activo": 0,
  };

  const handleChangeNivelActividad = (e) => {
    const nuevoNivelActividad = e.target.value;
    setNivelActividad(nuevoNivelActividad);

    // Mapear el nivel de actividad seleccionado
    const mapeo = mapeo_act_fisica[nuevoNivelActividad];
    setMapeoActividad(mapeo);
  };

  return (
    <div>
      <select value={nivelActividad} onChange={handleChangeNivelActividad}>
        <option value='sedentario'>Sedentario</option>
        <option value='moderado'>Moderado</option>
        <option value='activo'>Activo</option>
        <option value='muy activo'>Muy Activo</option>
      </select>

      {mapeoActividad !== null && (
        <div>Mapeo de Actividad: {mapeoActividad}</div>
      )}
    </div>
  );
}

export default MapeoActividadFisica;
