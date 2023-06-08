import React from "react";
import { useState } from "react";

function MapeoMunicipioRecSocial() {
  const [municipioRecSocial, setMunicipioRecSocial] = useState("");
  const [municipioMapeado, setMunicipioMapeado] = useState(null);

  const mapeoMunicipioRecSocial = {
    "rec social bajo": 3,
    "rec social medio": 1,
    "rec social alto": 0,
  };

  const handleChangeMunicipio = (e) => {
    const nuevoMunicipio = e.target.value;
    setMunicipioRecSocial(nuevoMunicipio);

    // Mapear el valor del municipio
    const mapeo = mapeoMunicipioRecSocial[nuevoMunicipio];
    setMunicipioMapeado(mapeo);
  };

  return (
    <div>
      <select value={municipioRecSocial} onChange={handleChangeMunicipio}>
        <option value=''>Seleccionar municipio</option>
        <option value='rec social bajo'>Rec Social Bajo</option>
        <option value='rec social medio'>Rec Social Medio</option>
        <option value='rec social alto'>Rec Social Alto</option>
      </select>

      {municipioMapeado !== null && (
        <div>Municipio mapeado: {municipioMapeado}</div>
      )}
    </div>
  );
}

export default MapeoMunicipioRecSocial;
