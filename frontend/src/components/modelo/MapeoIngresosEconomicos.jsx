import React from "react";
import { useState } from "react";

function MapeoIngresosEconomicos() {
  const [ingresosSeleccionados, setIngresosSeleccionados] =
    useState("ingresos_bajos");
  const [ingresosMapeados, setIngresosMapeados] = useState(null);

  const mapeoIngresos = {
    ingresos_bajos: 4,
    ingresos_medios: 2,
    ingresos_altos: 0,
  };

  const handleChangeIngresos = (e) => {
    const nuevosIngresos = e.target.value;
    setIngresosSeleccionados(nuevosIngresos);

    // Obtener el mapeo de ingresos económicos
    const mapeo = mapeoIngresos[nuevosIngresos];
    setIngresosMapeados(mapeo);
  };

  return (
    <div>
      <select value={ingresosSeleccionados} onChange={handleChangeIngresos}>
        <option value='ingresos_bajos'>Ingresos Bajos</option>
        <option value='ingresos_medios'>Ingresos Medios</option>
        <option value='ingresos_altos'>Ingresos Altos</option>
      </select>

      {ingresosMapeados !== null && (
        <div>Ingresos mapeados: {ingresosMapeados}</div>
      )}
    </div>
  );
}
export default MapeoIngresosEconomicos;
