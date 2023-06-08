import React from "react";
import { useState } from "react";

function MapeoMunicipioAccesible() {
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [municipioMapeado, setMunicipioMapeado] = useState(null);

  const mapeo_municipio_accesible = {
    "poco accesible": 3,
    medio_accesible: 1,
    "accesibilidad alta": 0,
  };

  const handleChangeMunicipio = (e) => {
    const nuevoMunicipio = e.target.value;
    setMunicipioSeleccionado(nuevoMunicipio);

    // Mapear el valor del municipio seleccionado
    const mapeo = mapeo_municipio_accesible[nuevoMunicipio];
    setMunicipioMapeado(mapeo);
  };

  return (
    <div>
      <select value={municipioSeleccionado} onChange={handleChangeMunicipio}>
        <option value=''>Seleccionar municipio</option>
        <option value='poco accesible'>Poco accesible</option>
        <option value='medio_accesible'>Medio accesible</option>
        <option value='accesibilidad alta'>Accesibilidad alta</option>
      </select>

      {municipioMapeado !== null && (
        <div>Municipio mapeado: {municipioMapeado}</div>
      )}
    </div>
  );
}
export default MapeoMunicipioAccesible;
