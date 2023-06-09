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
  const [edadSeleccionada, setEdadSeleccionada] = useState("");

  const handleEdadSeleccionada = (edad) => {
    setEdadSeleccionada(edad);
  };

  useEffect(() => {
    const obtenerModelo = async () => {
      try {
        const url = `https://lilicasanova.pythonanywhere.com/userpred?edad=${edadSeleccionada}&estado_civil=2&sexo=0&nivel_estudios=2&psicofarmacos=1&vive_solo=1&hijos=2&ascensor=0&act_fisica=0&lim_fisica=0&estado_animo=0&satisfaccion_vida=2&ingresos_economicos=0&red_apoyo_familiar=2&cohesion_social=1&municipio_accesible=0&municipio_rec_social=0&municipio_rec_ocio=3`; // Reemplaza los valores con los datos adecuados
        /* Url con los parametros cambiados`http://lilicasanova.pythonanywhere.com:5000/userpred?edad=${MapeoEdad}&estado_civil=${MapeoEstadoCivil}&sexo=${MapeoSexo}&nivel_estudios=${MapeoNivelEstudios}&psicofarmacos=${MapeoPsicofarmacos}&vive_solo=${MapeoViveSolo}&hijos=${MapeoHijos}&ascensor=${MapeoAscensor}&act_fisica=${MapeoActividadFisica}&lim_fisica=${MapeoLimitacionFisica}&estado_animo=${MapeoEstadoAnimo}&satisfaccion_vida=${MapeoSatisfaccionVida}&ingresos_economicos=${MapeoIngresosEconomicos}&red_apoyo_familiar=${MapeoRedApoyoFamiliar}&cohesion_social=${MapeoCohesionSocial}&municipio_accesible=${MapeoMunicipioAccesible}&municipio_rec_social=${MapeoMunicipioRecSocial}&municipio_rec_ocio=${MapeoMunicipioRecOcio}` */
        /* `http://lilicasanova.pythonanywhere.com:5000/userpred?edad=${edadSeleccionada}&estado_civil=${estadoCivilSeleccionado}&sexo=${seleccionSexo}&nivel_estudios=${nivelEstudiosSeleccionado}&psicofarmacos=${psicofarmacoSeleccionado}&vive_solo=${viveSoloSeleccionado}&hijos=${hijosSeleccionado}&ascensor=${ascensorSeleccionado}&act_fisica=${nivelActividad}&lim_fisica=${limFisicaSeleccionada}&estado_animo=${estadoAnimoSeleccionado}&satisfaccion_vida=${satisfaccionSeleccionada}&ingresos_economicos=${ingresosSeleccionados}&red_apoyo_familiar=${redSeleccionada}&cohesion_social=${cohesionSocial}&municipio_accesible=${municipioSeleccionado}&municipio_rec_social=${municipioRecSocial}&municipio_rec_ocio=${municipioOcioSeleccionado}` */
        console.log("URL de la API:", url);
        const respuesta = await fetch(url);
        const datos = await respuesta.text();
        console.log("hay alguien ahi??", datos);
        setModelo(datos);
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

  /*   if (!modelo) {
    return <p>Cargando...</p>;
  } */

  return (
    <div className="modelo-container">
      <div className="selectors-container">
        <div className="group-container">
          <h2 className="group-label">Datos demográficos</h2>
          <div className="selector-item">
            <p className="selector-label">Edad</p>
            <MapeoEdad onEdadSeleccionada={handleEdadSeleccionada} />
          </div>
          <div className="selector-item">
            <p className="selector-label">Estado civil</p>
            <MapeoEstadoCivil />
          </div>
          <div className="selector-item">
            <p className="selector-label">Sexo</p>
            <MapeoSexo />
          </div>
        </div>

        <div className="group-container">
          <h2 className="group-label">Salud y bienestar</h2>
          <div className="selector-item">
            <p className="selector-label">Psicofármacos</p>
            <MapeoPsicofarmacos />
          </div>
          <div className="selector-item">
            <p className="selector-label">Actividad física</p>
            <MapeoActividadFisica />
          </div>
          <div className="selector-item">
            <p className="selector-label">Limitación física</p>
            <MapeoLimitacionFisica />
          </div>
          <div className="selector-item">
            <p className="selector-label">Estado de ánimo</p>
            <MapeoEstadoAnimo />
          </div>
          <div className="selector-item">
            <p className="selector-label">Satisfacción de vida</p>
            <MapeoSatisfaccionVida />
          </div>
        </div>

        <div className="group-container">
          <h2 className="group-label">Familia y vivienda</h2>
          <div className="selector-item">
            <p className="selector-label">Vive solo</p>
            <MapeoViveSolo />
          </div>
          <div className="selector-item">
            <p className="selector-label">Hijos</p>
            <MapeoHijos />
          </div>
          <div className="selector-item">
            <p className="selector-label">Ascensor</p>
            <MapeoAscensor />
          </div>
          <div className="selector-item">
            <p className="selector-label">Red de apoyo familiar</p>
            <MapeoRedApoyoFamiliar />
          </div>
        </div>

        <div className="group-container">
          <h2 className="group-label">Educación</h2>
          <div className="selector-item">
            <p className="selector-label">Nivel de estudios</p>
            <MapeoNivelEstudios />
          </div>
        </div>

        <div className="group-container">
          <h2 className="group-label">Aspectos municipales</h2>
          <div className="selector-item">
            <p className="selector-label">Municipio accesible</p>
            <MapeoMunicipioAccesible />
          </div>
          <div className="selector-item">
            <p className="selector-label">Municipio con rec social</p>
            <MapeoMunicipioRecSocial />
          </div>
          <div className="selector-item">
            <p className="selector-label">Municipio con rec ocio</p>
            <MapeoMunicipioRecOcio />
          </div>
        </div>

        <div className="group-container">
          <h2 className="group-label">Economía</h2>
          <div className="selector-item">
            <p className="selector-label">Ingresos Económicos</p>
            <MapeoIngresosEconomicos />
          </div>
        </div>

        <div className="group-container">
          <h2 className="group-label">Cohesión social</h2>
          <div className="selector-item">
            <p className="selector-label">Cohesión social</p>
            <MapeoCohesionSocial />
          </div>
        </div>

        <h1 className="modelo-label">Modelo: {modelo}</h1>
        {/* {modelo !== "" && (
          <div>
            <p>respuesta del servidor</p>
            <p>{modelo}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Modelo;
