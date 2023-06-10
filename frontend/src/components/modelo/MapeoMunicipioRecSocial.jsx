import React from "react";
import { useState } from "react";

function MapeoMunicipioRecSocial({
  onMunicipioRecSocialSeleccionado,
  onMunicipioRecSocialMapeado,
}) {
  const [municipioRecSocialMapeado, setMunicipioRecSocialMapeado] =
    useState(null);

  const mapeoMunicipioRecSocial = {
    "rec social bajo": 3,
    "rec social medio": 1,
    "rec social alto": 0,
  };

  const handleChangeMunicipio = (e) => {
    const nuevoMunicipio = e.target.value;
    onMunicipioRecSocialSeleccionado(nuevoMunicipio);

    // Mapear el valor del municipio
    const mapeo = mapeoMunicipioRecSocial[nuevoMunicipio];
    setMunicipioRecSocialMapeado(mapeo);
    onMunicipioRecSocialMapeado(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeMunicipio}>
        <option value="">selecciona una opción</option>{" "}
        <option value="rec social bajo">Rec Social Bajo</option>
        <option value="rec social medio">Rec Social Medio</option>
        <option value="rec social alto">Rec Social Alto</option>
      </select>

      {municipioRecSocialMapeado !== null && (
        <div>Municipio mapeado: {municipioRecSocialMapeado}</div>
      )}
    </div>
  );
}

export default MapeoMunicipioRecSocial;
