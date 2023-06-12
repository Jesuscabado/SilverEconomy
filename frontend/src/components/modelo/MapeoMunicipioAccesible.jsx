import React from "react";
import { useState } from "react";

function MapeoMunicipioAccesible({
  onMunicipioSeleccionado,
  onMunicipio_accesibleMapeado,
}) {
  const [municipio_accesibleMapeado, setMunicipio_accesibleMapeado] =
    useState(null);

  const mapeo_municipio_accesible = {
    "poco accesible": 3,
    medio_accesible: 1,
    "accesibilidad alta": 0,
  };

  const handleChangeMunicipio = (e) => {
    const nuevoMunicipio = e.target.value;
    onMunicipioSeleccionado(nuevoMunicipio);

    // Mapear el valor del municipio seleccionado
    const mapeo = mapeo_municipio_accesible[nuevoMunicipio];
    setMunicipio_accesibleMapeado(mapeo);
    onMunicipio_accesibleMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeMunicipio}>
        <option value=''>selecciona una opción</option>{" "}
        <option value='poco accesible'>Poco accesible</option>
        <option value='medio_accesible'>Medio accesible</option>
        <option value='accesibilidad alta'>Accesibilidad alta</option>
      </select>
      {/* 
      {municipio_accesibleMapeado !== null && (
        <div>Municipio mapeado: {municipio_accesibleMapeado}</div>
      )} */}
    </div>
  );
}
export default MapeoMunicipioAccesible;
