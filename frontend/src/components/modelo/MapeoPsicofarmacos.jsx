import React from "react";
import { useState } from "react";

function MapeoPsicofarmacos({
  onPsicofarmacoSeleccionado,
  onPsicofarmacosMapeado,
}) {
  const [psicofarmacosMapeado, setPsicofarmacosMapeado] = useState(null);

  const mapeo_psicofarmacos = {
    ansioliticos: 2,
    antidepresivos: 1,
    otros: 1,
  };

  const handleChangePsicofarmaco = (e) => {
    const psicofarmaco = e.target.value;
    onPsicofarmacoSeleccionado(psicofarmaco);

    const psicofarmacosMapeado = mapeo_psicofarmacos[psicofarmaco];
    setPsicofarmacosMapeado(psicofarmacosMapeado);
    onPsicofarmacosMapeado(psicofarmacosMapeado);
  };

  return (
    <div>
      <select onChange={handleChangePsicofarmaco}>
        {" "}
        <option value="">selecciona una opción</option>
        {Object.keys(mapeo_psicofarmacos).map((psicofarmaco) => (
          <option key={psicofarmaco} value={psicofarmaco}>
            {psicofarmaco}
          </option>
        ))}
      </select>

      {psicofarmacosMapeado !== null && (
        <div>Valor mapeado: {psicofarmacosMapeado}</div>
      )}
    </div>
  );
}

export default MapeoPsicofarmacos;
