import React from "react";
import { useState } from "react";

function MapeoMunicipioRecOcio() {
  const [municipioOcioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [municipioMapeado, setMunicipioMapeado] = useState(null);

  const mapeoMunicipioRecOcio = {
    "rec ocio bajo": 3,
    "rec ocio medio": 1,
    "rec ocio alto": 0,
  };

  const handleChangeMunicipio = (e) => {
    const nuevoMunicipio = e.target.value;
    setMunicipioSeleccionado(nuevoMunicipio);

    // Mapear el municipio seleccionado
    const mapeo = mapeoMunicipioRecOcio[nuevoMunicipio];
    setMunicipioMapeado(mapeo);
  };

  return (
    <div>
      <select
        value={municipioOcioSeleccionado}
        onChange={handleChangeMunicipio}
      >
        <option value=''>selecciona una opción</option>
        <option value='rec ocio bajo'>Recreación y ocio bajo</option>
        <option value='rec ocio medio'>Recreación y ocio medio</option>
        <option value='rec ocio alto'>Recreación y ocio alto</option>
      </select>

      {municipioMapeado !== null && (
        <div>Municipio mapeado: {municipioMapeado}</div>
      )}
    </div>
  );
}
export default MapeoMunicipioRecOcio;
