import React from "react";
import { useState } from "react";

function MapeoSexo({ onSexoSeleccionado, onSexoMapeado }) {
  const [sexoMapeado, setSexoMapeado] = useState(null);

  const mapeoSexos = {
    hombre: 1,
    mujer: 3,
  };

  const handleChangeSexo = (e) => {
    const nuevoSexo = e.target.value;
    onSexoSeleccionado(nuevoSexo);

    // Mapear el sexo seleccionado
    const mapeo = mapeoSexos[nuevoSexo];
    setSexoMapeado(mapeo);
    onSexoMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeSexo}>
        <option value=''>selecciona una opción</option>{" "}
        <option value='hombre'>Hombre</option>
        <option value='mujer'>Mujer</option>
      </select>
      {/*       {sexoMapeado !== null && <div>Sexo mapeado: {sexoMapeado}</div>}
       */}
    </div>
  );
}

export default MapeoSexo;
