import React from "react";
import { useState } from "react";

function MapeoMunicipioRecOcio({
  onMunicipioOcioSeleccionado,
  onMunicipioRecOcioMapeado,
}) {
  const [municipioRecOcioMapeado, setMunicipioRecOcioMapeado] = useState(null);

  const mapeoMunicipioRecOcio = {
    "rec ocio bajo": 3,
    "rec ocio medio": 1,
    "rec ocio alto": 0,
  };

  const handleChangeMunicipioOcio = (e) => {
    const nuevoMunicipio = e.target.value;
    onMunicipioOcioSeleccionado(nuevoMunicipio);

    // Mapear el municipio seleccionado
    const mapeo = mapeoMunicipioRecOcio[nuevoMunicipio];
    setMunicipioRecOcioMapeado(mapeo);
    onMunicipioRecOcioMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeMunicipioOcio}>
        <option value=''>selecciona una opción</option>
        <option value='rec ocio bajo'>Recreación y ocio bajo</option>
        <option value='rec ocio medio'>Recreación y ocio medio</option>
        <option value='rec ocio alto'>Recreación y ocio alto</option>
      </select>

      {/*   {municipioRecOcioMapeado !== null && (
        <div>Municipio mapeado: {municipioRecOcioMapeado}</div>
      )} */}
    </div>
  );
}
export default MapeoMunicipioRecOcio;
