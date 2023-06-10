import React, { useState } from "react";

function MapeoEdad({ onEdadSeleccionada }) {
  const [edadMapeada, setEdadMapeada] = useState(null);

  const mapearEdad = (edad) => {
    if (edad > 95) {
      return 6;
    } else if (65 <= edad && edad <= 69) {
      return 5;
    } else if (90 <= edad && edad <= 95) {
      return 4;
    } else if ((70 <= edad && edad <= 74) || (80 <= edad && edad <= 84)) {
      return 3;
    } else if (75 <= edad && edad <= 79) {
      return 2;
    } else if (85 <= edad && edad <= 89) {
      return 1;
    } else if ((50 <= edad && edad <= 64) || (40 <= edad && edad <= 49)) {
      return 0;
    } else {
      return -1; // Valor predeterminado en caso de que ninguna condición se cumpla
    }
  };

  const handleChangeEdad = (e) => {
    const nuevaEdad = parseInt(e.target.value);
    onEdadSeleccionada(nuevaEdad);
    console.log("edad seleccionada", nuevaEdad);

    // Mapear la nueva edad seleccionada
    const mapeo = mapearEdad(nuevaEdad);
    console.log("mapeo", mapeo);
    setEdadMapeada(mapeo);
  };

  return (
    <div>
      <select onChange={handleChangeEdad}>
        <option value=''>selecciona una opción</option>
        {Array.from({ length: 62 }, (_, index) => 40 + index).map((edad) => (
          <option key={edad} value={edad}>
            {edad}
          </option>
        ))}
      </select>

      {edadMapeada !== null && <div>Edad mapeada: {edadMapeada}</div>}
    </div>
  );
}

export default MapeoEdad;
