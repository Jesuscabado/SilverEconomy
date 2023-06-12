import React from "react";
import { useState } from "react";

function MapeoRedApoyoFamiliar({ onRedSeleccionada, onRedApoyoMapeada }) {
  const [redApoyoMapeada, setRedApoyoMapeada] = useState(null);

  const mapeoRedApoyoFamiliar = {
    "sin red": 4,
    "red: 1 a 5": 2,
    "red: mas de 5": 0,
  };

  const handleChangeRed = (e) => {
    const nuevaRed = e.target.value;
    onRedSeleccionada(nuevaRed);

    // Mapear la opción seleccionada a su valor correspondiente
    const mapeo = mapeoRedApoyoFamiliar[nuevaRed];
    setRedApoyoMapeada(mapeo);
    onRedApoyoMapeada(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeRed}>
        <option value=''>selecciona una opción</option>
        <option value='sin red'>Sin red</option>
        <option value='red: 1 a 5'>Red: 1 a 5</option>
        <option value='red: mas de 5'>Red: más de 5</option>
      </select>
      {/*       {redApoyoMapeada !== null && <div>Red mapeada: {redApoyoMapeada}</div>}
       */}
    </div>
  );
}

export default MapeoRedApoyoFamiliar;
