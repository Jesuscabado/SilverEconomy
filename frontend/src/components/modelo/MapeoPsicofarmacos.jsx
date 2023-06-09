import React from "react";
import { useState } from "react";

function MapeoPsicofarmacos() {
  const [psicofarmacoSeleccionado, setPsicofarmacoSeleccionado] = useState("");
  const [valorMapeado, setValorMapeado] = useState(null);

  const mapeo_psicofarmacos = {
    ansioliticos: 2,
    antidepresivos: 1,
    otros: 1,
  };

  const handleChangePsicofarmaco = (e) => {
    const psicofarmaco = e.target.value;
    setPsicofarmacoSeleccionado(psicofarmaco);

    const valorMapeado = mapeo_psicofarmacos[psicofarmaco];
    setValorMapeado(valorMapeado);
  };

  return (
    <div>
      <select
        value={psicofarmacoSeleccionado}
        onChange={handleChangePsicofarmaco}
      >
        {" "}
        <option value=''>selecciona una opción</option>
        {Object.keys(mapeo_psicofarmacos).map((psicofarmaco) => (
          <option key={psicofarmaco} value={psicofarmaco}>
            {psicofarmaco}
          </option>
        ))}
      </select>

      {valorMapeado !== null && <div>Valor mapeado: {valorMapeado}</div>}
    </div>
  );
}

export default MapeoPsicofarmacos;
