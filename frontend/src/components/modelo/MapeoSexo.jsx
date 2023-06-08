import React from "react";
import { useState } from "react";

function MapeoSexo() {
  const [sexoSeleccionado, setSexoSeleccionado] = useState("hombre");
  const [sexoMapeado, setSexoMapeado] = useState(null);

  const mapeoSexos = {
    hombre: 1,
    mujer: 3,
  };

  const handleChangeSexo = (e) => {
    const nuevoSexo = e.target.value;
    setSexoSeleccionado(nuevoSexo);

    // Mapear el sexo seleccionado
    const mapeo = mapeoSexos[nuevoSexo];
    setSexoMapeado(mapeo);
  };

  return (
    <div>
      <select value={sexoSeleccionado} onChange={handleChangeSexo}>
        <option value='hombre'>Hombre</option>
        <option value='mujer'>Mujer</option>
      </select>

      {sexoMapeado !== null && <div>Sexo mapeado: {sexoMapeado}</div>}
    </div>
  );
}

export default MapeoSexo;
