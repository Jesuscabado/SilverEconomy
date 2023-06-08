import React, { useState, useEffect } from "react";
import MapeoViveSolo from "./MapeoViveSolo";
import MapeoSexo from "./MapeoSexo";
import MapeoEdad from "./MapeoEdad";
import MapeoEstadoCivil from "./MapeoEstadoCivil";
import MapeoNivelEstudios from "./MapeoNivelEstudios";
import MapeoPsicofarmacos from "./MapeoPsicofarmacos";
import MapeoHijos from "./MapeoHijos";
import MapeoAscensor from "./MapeoAscensor";
import MapeoEstadoAnimo from "./MapeoEstadoAnimo";
import MapeoCohesionSocial from "./MapeoCohesionSocial";
import MapeoMunicipioRecSocial from "./MapeoMunicipioRecSocial";
import MapeoMunicipioAccesible from "./MapeoMunicipioAccesible";
import MapeoSatisfaccionVida from "./MapeoSatisfaccionVida";
import MapeoIngresosEconomicos from "./MapeoIngresosEconomicos";
import MapeoRedApoyoFamiliar from "./MapeoRedApoyoFamiliar";
import MapeoMunicipioRecOcio from "./MapeoMunicipioRecOcio";
import MapeoLimitacionFisica from "./MapeoLimitacionFisica";
import MapeoActividadFisica from "./MapeoActividadFisica";

import "../../css/Modelo.css";

function Modelo({
  seleccionSexo,
  edadSeleccionada,
  estadoCivilSeleccionado,
  nivelEstudiosSeleccionado,
  psicofarmacoSeleccionado,
  viveSoloSeleccionado,
  hijosSeleccionado,
  ascensorSeleccionado,
  nivelActividad,
  limFisicaSeleccionada,
  estadoAnimoSeleccionado,
  satisfaccionSeleccionada,
  ingresosSeleccionados,
  redSeleccionada,
  cohesionSocial,
  municipioSeleccionado,
  municipioRecSocial,
  municipioOcioSeleccionado,
}) {
  const [modelo, setModelo] = useState("");

  useEffect(() => {
    const obtenerModelo = async () => {
      try {
        const respuesta = await fetch(
          `http://localhost:5000/userpred?edad=${edadSeleccionada}&estado_civil=${estadoCivilSeleccionado}&sexo=${seleccionSexo}&nivel_estudios=${nivelEstudiosSeleccionado}&psicofarmacos=${psicofarmacoSeleccionado}&vive_solo=${viveSoloSeleccionado}&hijos=${hijosSeleccionado}&ascensor=${ascensorSeleccionado}&act_fisica=${nivelActividad}&lim_fisica=${limFisicaSeleccionada}&estado_animo=${estadoAnimoSeleccionado}&satisfaccion_vida=${satisfaccionSeleccionada}&ingresos_economicos=${ingresosSeleccionados}&red_apoyo_familiar=${redSeleccionada}&cohesion_social=${cohesionSocial}&municipio_accesible=${municipioSeleccionado}&municipio_rec_social=${municipioRecSocial}&municipio_rec_ocio=${municipioOcioSeleccionado}`
        ); // Reemplaza los valores con los datos adecuados
        const datos = await respuesta.json();
        setModelo(datos.modelo);
      } catch (error) {
        console.error("Error al obtener el modelo:", error);
      }
    };

    obtenerModelo();
  }, [
    seleccionSexo,
    edadSeleccionada,
    estadoCivilSeleccionado,
    nivelEstudiosSeleccionado,
    psicofarmacoSeleccionado,
    viveSoloSeleccionado,
    hijosSeleccionado,
    ascensorSeleccionado,
    nivelActividad,
    limFisicaSeleccionada,
    estadoAnimoSeleccionado,
    satisfaccionSeleccionada,
    ingresosSeleccionados,
    redSeleccionada,
    cohesionSocial,
    municipioSeleccionado,
    municipioRecSocial,
    municipioOcioSeleccionado,
  ]);

  return (
    <div className='selectors-container'>
      <div className='selector-item'>
        <p className='selector-label'>Edad</p>
        <MapeoEdad />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Estado civil</p>
        <MapeoEstadoCivil />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Sexo</p>
        <MapeoSexo />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Nivel de estudios</p>
        <MapeoNivelEstudios />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Psicofármacos</p>
        <MapeoPsicofarmacos />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Vive solo</p>
        <MapeoViveSolo />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Hijos</p>
        <MapeoHijos />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Ascensor</p>
        <MapeoAscensor />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Actividad física</p>
        <MapeoActividadFisica />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Limitación física</p>
        <MapeoLimitacionFisica />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Estado de ánimo</p>
        <MapeoEstadoAnimo />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Satisfacción de vida</p>
        <MapeoSatisfaccionVida />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Ingresos Económicos</p>
        <MapeoIngresosEconomicos />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Red de apoyo familiar</p>
        <MapeoRedApoyoFamiliar />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Cohesión social</p>
        <MapeoCohesionSocial />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Municipio accesible</p>
        <MapeoMunicipioAccesible />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Municipio con rec social</p>
        <MapeoMunicipioRecSocial />
      </div>
      <div className='selector-item'>
        <p className='selector-label'>Municipio con rec ocio</p>
        <MapeoMunicipioRecOcio />
      </div>

      <h1 className='modelo-label'>Modelo: {modelo}</h1>
    </div>
  );
}

export default Modelo;
