import React, { useState } from "react";
import React, { useState } from "react";

function MapeoActividadFisica({ onNivelActividad, onNivelActividadMapeado }) {
function MapeoActividadFisica({ onNivelActividad, onNivelActividadMapeado }) {
  const [mapeoActividad, setMapeoActividad] = useState(null);

  const mapeo_act_fisica = {
    sedentario: 4,
    moderado: 3,
    activo: 1,
    muyActivo: 0,
    muyActivo: 0,
  };

  const handleChangeNivelActividad = (e) => {
    const nuevoNivelActividad = e.target.value;
    onNivelActividad(nuevoNivelActividad);
    onNivelActividad(nuevoNivelActividad);

    // Mapear el nivel de actividad seleccionado
    const mapeo = mapeo_act_fisica[nuevoNivelActividad];
    setMapeoActividad(mapeo);
    onNivelActividadMapeado(mapeo);
    onNivelActividadMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeNivelActividad}>
        <option value=''>selecciona una opción</option>
        <option value='sedentario'>Sedentario</option>
        <option value='moderado'>Moderado</option>
        <option value='activo'>Activo</option>
        <option value='muy activo'>Muy Activo</option>
      </select>

      {/* {mapeoActividad !== null && (
        <div>Mapeo de Actividad: {mapeoActividad}</div>
      )} */}
    </div>
  );
}

export default MapeoActividadFisica;
