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
import SideBar from "../SideBar";
import Navbar from "../Navbar";

import "../../css/Modelo.css";

function Modelo() {
function Modelo() {
  const [modelo, setModelo] = useState("");
  const [edadSeleccionada, setEdadSeleccionada] = useState("");
  const [nivelActividad, setNivelActividad] = useState("");
  const [mapeoActividad, setMapeoActividad] = useState(null);
  const [sexoSeleccionado, setSexoSeleccionado] = useState("");
  const [sexoMapeado, setSexoMapeado] = useState(null);
  const [estadoCivilSeleccionado, setEstadoCivilSeleccionado] = useState("");
  const [estadoCivilMapeado, setEstadoCivilMapeado] = useState(null);
  const [nivelEstudiosSeleccionado, setNivelEstudiosSeleccionado] =
    useState("");
  const [nivelEstudiosMapeado, setNivelEstudiosMapeado] = useState(null);
  const [psicofarmacoSeleccionado, setPsicofarmacoSeleccionado] = useState("");
  const [psicofarmacosMapeado, setPsicofarmacosMapeado] = useState(null);
  const [viveSeleccionado, setViveSoloSeleccionado] = useState("");
  const [viveSoloMapeado, setViveSoloMapeado] = useState(null);
  const [hijosSeleccionado, setHijosSeleccionado] = useState("");
  const [HijosMapeado, setHijosMapeado] = useState(null);
  const [ascensorSeleccionado, setAscensorSeleccionado] = useState("");
  const [ascensorMapeado, setAscensorMapeado] = useState(null);
  const [limFisicaSeleccionada, setLimFisicaSeleccionada] = useState("");
  const [limFisicaMapeada, setLimFisicaMapeada] = useState(null);
  const [estadoAnimoSeleccionado, setEstadoAnimoSeleccionado] = useState("");
  const [estadoAnimoMapeado, setEstadoAnimoMapeado] = useState(null);
  const [satisfaccionSeleccionada, setSatisfaccionSeleccionada] = useState("");
  const [satisfaccionMapeada, setSatisfaccionMapeada] = useState(null);
  const [ingresosSeleccionados, setIngresosSeleccionados] = useState("");
  const [ingresosMapeados, setIngresosMapeados] = useState(null);
  const [redSeleccionada, setRedSeleccionada] = useState("");
  const [redApoyoMapeada, setRedApoyoMapeada] = useState(null);
  const [cohesionSocialSeleccionado, setCohesionSocialSeleccionado] =
    useState("");
  const [cohesionSocial, setCohesionSocial] = useState(null);
  const [municipioOcioSeleccionado, setMunicipioOcioSeleccionado] =
    useState("");
  const [municipioRecOcioMapeado, setMunicipioRecOcioMapeado] = useState(null);
  const [municipioRecSocialSeleccionado, setMunicipioRecSocialSeleccionado] =
    useState("");
  const [municipioRecSocialMapeado, setMunicipioRecSocialMapeado] =
    useState(null);
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [municipio_accesibleMapeado, setMunicipio_accesibleMapeado] =
    useState(null);

  const handleEdadSeleccionada = (edad) => {
    setEdadSeleccionada(edad);
  };

  const handleNivelActividad = (nivelActividad) => {
    setNivelActividad(nivelActividad);
  };

  const handleMapeoActividad = (mapeo) => {
    setMapeoActividad(mapeo);
  };

  const handleSexoSeleccionado = (sexo) => {
    setSexoSeleccionado(sexo);
  };

  const handleSexoMapeado = (mapeo) => {
    setSexoMapeado(mapeo);
  };

  const handleEstadoCivilSeleccionado = (estadoCivil) => {
    setEstadoCivilSeleccionado(estadoCivil);
  };

  const handleEstadoCivilMapeado = (mapeo) => {
    setEstadoCivilMapeado(mapeo);
  };

  const handleNivelEstudiosSeleccionado = (nivelEstudios) => {
    setNivelEstudiosSeleccionado(nivelEstudios);
  };

  const handleNivelEstudiosMapeado = (mapeo) => {
    setNivelEstudiosMapeado(mapeo);
  };

  const handlePsicofarmacoSeleccionado = (psicofarmaco) => {
    setPsicofarmacoSeleccionado(psicofarmaco);
  };

  const handlePsicofarmacosMapeado = (mapeo) => {
    setPsicofarmacosMapeado(mapeo);
  };

  const handleViveSoloSeleccionado = (viveSolo) => {
    setViveSoloSeleccionado(viveSolo);
  };

  const handleViveSoloMapeado = (mapeo) => {
    setViveSoloMapeado(mapeo);
  };

  const handleHijosSeleccionado = (hijos) => {
    setHijosSeleccionado(hijos);
  };

  const handleHijosMapeado = (mapeo) => {
    setHijosMapeado(mapeo);
  };

  const handleAscensorSeleccionado = (ascensor) => {
    setAscensorSeleccionado(ascensor);
  };

  const handleAscensorMapeado = (mapeo) => {
    setAscensorMapeado(mapeo);
  };

  const handleLimFisicaSeleccionada = (limFisica) => {
    setLimFisicaSeleccionada(limFisica);
  };

  const handleLimFisicaMapeada = (mapeo) => {
    setLimFisicaMapeada(mapeo);
  };

  const handleEstadoAnimoSeleccionado = (estadoAnimo) => {
    setEstadoAnimoSeleccionado(estadoAnimo);
  };

  const handleEstadoAnimoMapeado = (mapeo) => {
    setEstadoAnimoMapeado(mapeo);
  };

  const handleSatisfaccionSeleccionada = (satisfaccion) => {
    setSatisfaccionSeleccionada(satisfaccion);
  };

  const handleSatisfaccionMapeada = (mapeo) => {
    setSatisfaccionMapeada(mapeo);
  };

  const handleIngresosSeleccionados = (ingresos) => {
    setIngresosSeleccionados(ingresos);
  };

  const handleIngresosMapeados = (mapeo) => {
    setIngresosMapeados(mapeo);
  };

  const handleRedSeleccionada = (red) => {
    setRedSeleccionada(red);
  };

  const handleRedApoyoMapeada = (mapeo) => {
    setRedApoyoMapeada(mapeo);
  };

  const handleCohesionSocialSeleccionado = (cohesionSocial) => {
    setCohesionSocialSeleccionado(cohesionSocial);
  };

  const handleCohesionSocialMapeado = (cohesionSocial) => {
    setCohesionSocial(cohesionSocial);
  };

  const handleMunicipioOcioSeleccionado = (municipio) => {
    setMunicipioOcioSeleccionado(municipio);
  };

  const handleMunicipioRecOcioMapeado = (mapeo) => {
    setMunicipioRecOcioMapeado(mapeo);
  };

  const handleMunicipioAccesibleMapeado = (mapeo) => {
    setMunicipio_accesibleMapeado(mapeo);
  };

  const handleMunicipioRecSocial = (municipio) => {
    setMunicipioRecSocialSeleccionado(municipio);
  };

  const handleMunicipioRecSocialMapeado = (mapeo) => {
    setMunicipioRecSocialMapeado(mapeo);
  };

  const handleMunicipioSeleccionado = (municipio) => {
    setMunicipioSeleccionado(municipio);
  };

  /* ------------------------ */
  const [currentSection, setCurrentSection] = useState(0);

  /* ------------------------ */

  useEffect(() => {
    const obtenerModelo = async () => {
      try {
        const url =
          /* `https://lilicasanova.pythonanywhere.com/userpred?edad=${edadSeleccionada}&estado_civil=2&sexo=0&nivel_estudios=2&psicofarmacos=1&vive_solo=1&hijos=2&ascensor=0&act_fisica=0&lim_fisica=0&estado_animo=0&satisfaccion_vida=2&ingresos_economicos=0&red_apoyo_familiar=2&cohesion_social=1&municipio_accesible=0&municipio_rec_social=0&municipio_rec_ocio=3`; */ // Reemplaza los valores con los datos adecuados

          `http://lilicasanova.pythonanywhere.com/userpred?edad=${edadSeleccionada}&estado_civil=${estadoCivilMapeado}&sexo=${sexoMapeado}&nivel_estudios=${nivelEstudiosMapeado}&psicofarmacos=${psicofarmacosMapeado}&vive_solo=${viveSoloMapeado}&hijos=${HijosMapeado}&ascensor=${ascensorMapeado}&act_fisica=${mapeoActividad}&lim_fisica=${limFisicaMapeada}&estado_animo=${estadoAnimoMapeado}&satisfaccion_vida=${satisfaccionMapeada}&ingresos_economicos=${ingresosMapeados}&red_apoyo_familiar=${redApoyoMapeada}&cohesion_social=${cohesionSocial}&municipio_accesible=${municipio_accesibleMapeado}&municipio_rec_social=${municipioRecSocialMapeado}&municipio_rec_ocio=${municipioRecOcioMapeado}`;
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
    sexoSeleccionado,
    sexoMapeado,
    sexoSeleccionado,
    sexoMapeado,
    edadSeleccionada,
    estadoCivilMapeado,
    estadoCivilMapeado,
    estadoCivilSeleccionado,
    nivelEstudiosSeleccionado,
    nivelEstudiosMapeado,
    nivelEstudiosMapeado,
    psicofarmacoSeleccionado,
    psicofarmacosMapeado,
    viveSeleccionado,
    viveSoloMapeado,
    psicofarmacosMapeado,
    viveSeleccionado,
    viveSoloMapeado,
    hijosSeleccionado,
    HijosMapeado,
    HijosMapeado,
    ascensorSeleccionado,
    ascensorMapeado,
    mapeoActividad,
    ascensorMapeado,
    mapeoActividad,
    nivelActividad,
    limFisicaSeleccionada,
    limFisicaMapeada,
    limFisicaMapeada,
    estadoAnimoSeleccionado,
    estadoAnimoMapeado,
    satisfaccionMapeada,
    estadoAnimoMapeado,
    satisfaccionMapeada,
    satisfaccionSeleccionada,
    ingresosSeleccionados,
    ingresosMapeados,
    ingresosMapeados,
    redSeleccionada,
    redApoyoMapeada,
    cohesionSocialSeleccionado,
    redApoyoMapeada,
    cohesionSocialSeleccionado,
    cohesionSocial,
    municipioSeleccionado,
    municipio_accesibleMapeado,
    municipioRecSocialSeleccionado,
    municipioRecSocialMapeado,
    municipio_accesibleMapeado,
    municipioRecSocialSeleccionado,
    municipioRecSocialMapeado,
    municipioOcioSeleccionado,
    municipioRecOcioMapeado,
    municipioRecOcioMapeado,
  ]);

  /*  -------------------------------------------   */

  const sections = [
    {
      label: "Datos demográficos",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Edad</p>
              <MapeoEdad onEdadSeleccionada={handleEdadSeleccionada} />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Estado civil</p>
              <MapeoEstadoCivil
                onEstadoCivilSeleccionado={handleEstadoCivilSeleccionado}
                onEstadoCivilMapeado={handleEstadoCivilMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Sexo</p>
              <MapeoSexo
                onSexoSeleccionado={handleSexoSeleccionado}
                onSexoMapeado={handleSexoMapeado}
              />
            </div>
          ),
        },
      ],
    },

    {
      label: "Salud y bienestar",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Psicofármacos</p>
              <MapeoPsicofarmacos
                onPsicofarmacoSeleccionado={handlePsicofarmacoSeleccionado}
                onPsicofarmacosMapeado={handlePsicofarmacosMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Actividad física</p>
              <MapeoActividadFisica
                onNivelActividad={handleNivelActividad}
                onNivelActividadMapeado={handleMapeoActividad}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Limitación física</p>
              <MapeoLimitacionFisica
                onLimFisicaSeleccionada={handleLimFisicaSeleccionada}
                onLimiFisicaMapeada={handleLimFisicaMapeada}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Estado de ánimo</p>
              <MapeoEstadoAnimo
                onEstadoAnimoSeleccionado={handleEstadoAnimoSeleccionado}
                onEstadoAnimoMapeado={handleEstadoAnimoMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Satisfacción de vida</p>
              <MapeoSatisfaccionVida
                onSatisfaccionMapeada={handleSatisfaccionMapeada}
                onSatisfaccionSeleccionada={handleSatisfaccionSeleccionada}
              />
            </div>
          ),
        },
      ],
    },

    {
      label: "Familia y vivienda",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Vive solo</p>
              <MapeoViveSolo
                onViveSoloSeleccionado={handleViveSoloSeleccionado}
                onViveSoloMapeado={handleViveSoloMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Hijos</p>
              <MapeoHijos
                onHijosSeleccionado={handleHijosSeleccionado}
                onHijosMapeado={handleHijosMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Ascensor</p>
              <MapeoAscensor
                onAscensorSeleccionado={handleAscensorSeleccionado}
                onAscensorMapeado={handleAscensorMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Red de apoyo familiar</p>
              <MapeoRedApoyoFamiliar
                onRedSeleccionada={handleRedSeleccionada}
                onRedApoyoMapeada={handleRedApoyoMapeada}
              />
            </div>
          ),
        },
      ],
    },

    {
      label: "Educación",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Nivel de estudios</p>
              <MapeoNivelEstudios
                onNivelEstudiosSeleccionado={handleNivelEstudiosSeleccionado}
                onNivelEstudiosMapeado={handleNivelEstudiosMapeado}
              />
            </div>
          ),
        },
      ],
    },

    {
      label: "Aspectos municipales",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Municipio accesible</p>
              <MapeoMunicipioAccesible
                onMunicipioSeleccionado={handleMunicipioSeleccionado}
                onMunicipio_accesibleMapeado={handleMunicipioAccesibleMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Municipio con rec social</p>
              <MapeoMunicipioRecSocial
                onMunicipioRecSocialSeleccionado={handleMunicipioRecSocial}
                onMunicipioRecSocialMapeado={handleMunicipioRecSocialMapeado}
              />
            </div>
          ),
        },
        {
          component: (
            <div>
              <p className='selector-label'>Municipio con rec ocio</p>
              <MapeoMunicipioRecOcio
                onMunicipioOcioSeleccionado={handleMunicipioOcioSeleccionado}
                onMunicipioRecOcioMapeado={handleMunicipioRecOcioMapeado}
              />
            </div>
          ),
        },
      ],
    },

    {
      label: "Economía",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Ingresos Económicos</p>
              <MapeoIngresosEconomicos
                onIngresosSeleccionados={handleIngresosSeleccionados}
                onIngresosMapeados={handleIngresosMapeados}
              />
            </div>
          ),
        },
      ],
    },

    {
      label: "Cohesión social",
      components: [
        {
          component: (
            <div>
              <p className='selector-label'>Cohesión social</p>
              <MapeoCohesionSocial
                onCohesionSocialSeleccionado={handleCohesionSocialSeleccionado}
                onCohesionSocialMapeado={handleCohesionSocialMapeado}
              />
            </div>
          ),
        },
      ],
    },
  ];

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePreviousSection = () => {
    setCurrentSection(currentSection - 1);
  };

  /*  -------------------------------------------   */

  return (
    <div>
      <Navbar />
      <SideBar />
      <div className='flex flex-row items-center justify-center h-screen'>
        <h3 className='titulomapa text-3xl font-bold mb-4'>
          Modelo predictivo
        </h3>
        <div className='container mx-auto'>
          <div className='card-11 flex flex-row items-center justify-center ml-4'>
            <div className='main-container '>
              <div className='group-container'>
                <h2 className='group-label'>
                  {sections[currentSection].label}
                </h2>
                {sections[currentSection].components.map((component, index) => (
                  <div key={index} className='selector-item'>
                    <p className='selector-label'>{component.label}</p>
                    {component.component}
                  </div>
                ))}
              </div>

              {/*  <div className='selectors-container'>
        <div className='group-container'>
          <h2 className='group-label'>{sections[currentSection].label}</h2>
          <div className='selector-item'>
            {sections[currentSection].component}
          </div>
        </div>
      </div>*/}

              {/* Botón "Anterior" */}
              {currentSection > 0 && (
                <button onClick={handlePreviousSection}>Anterior</button>
              )}

              {/* Botón "Siguiente" */}
              {currentSection < sections.length - 1 && (
                <button onClick={handleNextSection}>Siguiente</button>
              )}

              {currentSection === sections.length - 1 && (
                <h1 className='modelo-label'>Modelo: {modelo}</h1>
              )}
            </div>
          </div>
        </div>
        {/* /* --------------------------------- */}
        {/* 
      <div className='modelo-container'>
        <div className='selectors-container'>
          <div className='group-container'>
            <h2 className='group-label'>Datos demográficos</h2>
            <div className='selector-item'>
              <p className='selector-label'>Edad</p>
              <MapeoEdad onEdadSeleccionada={handleEdadSeleccionada} />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Estado civil</p>
              <MapeoEstadoCivil
                onEstadoCivilSeleccionado={handleEstadoCivilSeleccionado}
                onEstadoCivilMapeado={handleEstadoCivilMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Sexo</p>
              <MapeoSexo
                onSexoSeleccionado={handleSexoSeleccionado}
                onSexoMapeado={handleSexoMapeado}
              />
            </div>
          </div>

          <div className='group-container'>
            <h2 className='group-label'>Salud y bienestar</h2>
            <div className='selector-item'>
              <p className='selector-label'>Psicofármacos</p>
              <MapeoPsicofarmacos
                onPsicofarmacoSeleccionado={handlePsicofarmacoSeleccionado}
                onPsicofarmacosMapeado={handlePsicofarmacosMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Actividad física</p>
              <MapeoActividadFisica
                onNivelActividad={handleNivelActividad}
                onNivelActividadMapeado={handleMapeoActividad}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Limitación física</p>
              <MapeoLimitacionFisica
                onLimFisicaSeleccionada={handleLimFisicaSeleccionada}
                onLimiFisicaMapeada={handleLimFisicaMapeada}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Estado de ánimo</p>
              <MapeoEstadoAnimo
                onEstadoAnimoSeleccionado={handleEstadoAnimoSeleccionado}
                onEstadoAnimoMapeado={handleEstadoAnimoMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Satisfacción de vida</p>
              <MapeoSatisfaccionVida
                onSatisfaccionMapeada={handleSatisfaccionMapeada}
                onSatisfaccionSeleccionada={handleSatisfaccionSeleccionada}
              />
            </div>
          </div>

          <div className='group-container'>
            <h2 className='group-label'>Familia y vivienda</h2>
            <div className='selector-item'>
              <p className='selector-label'>Vive solo</p>
              <MapeoViveSolo
                onViveSoloSeleccionado={handleViveSoloSeleccionado}
                onViveSoloMapeado={handleViveSoloMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Hijos</p>
              <MapeoHijos
                onHijosSeleccionado={handleHijosSeleccionado}
                onHijosMapeado={handleHijosMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Ascensor</p>
              <MapeoAscensor
                onAscensorSeleccionado={handleAscensorSeleccionado}
                onAscensorMapeado={handleAscensorMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Red de apoyo familiar</p>
              <MapeoRedApoyoFamiliar
                onRedSeleccionada={handleRedSeleccionada}
                onRedApoyoMapeada={handleRedApoyoMapeada}
              />
            </div>
          </div>

          <div className='group-container'>
            <h2 className='group-label'>Educación</h2>
            <div className='selector-item'>
              <p className='selector-label'>Nivel de estudios</p>
              <MapeoNivelEstudios
                onNivelEstudiosSeleccionado={handleNivelEstudiosSeleccionado}
                onNivelEstudiosMapeado={handleNivelEstudiosMapeado}
              />
            </div>
          </div>

          <div className='group-container'>
            <h2 className='group-label'>Aspectos municipales</h2>
            <div className='selector-item'>
              <p className='selector-label'>Municipio accesible</p>
              <MapeoMunicipioAccesible
                onMunicipioSeleccionado={handleMunicipioSeleccionado}
                onMunicipio_accesibleMapeado={handleMunicipioAccesibleMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Municipio con rec social</p>
              <MapeoMunicipioRecSocial
                onMunicipioRecSocialSeleccionado={handleMunicipioRecSocial}
                onMunicipioRecSocialMapeado={handleMunicipioRecSocialMapeado}
              />
            </div>
            <div className='selector-item'>
              <p className='selector-label'>Municipio con rec ocio</p>
              <MapeoMunicipioRecOcio
                onMunicipioOcioSeleccionado={handleMunicipioOcioSeleccionado}
                onMunicipioRecOcioMapeado={handleMunicipioRecOcioMapeado}
              />
            </div>
          </div>

          <div className='group-container'>
            <h2 className='group-label'>Economía</h2>
            <div className='selector-item'>
              <p className='selector-label'>Ingresos Económicos</p>
              <MapeoIngresosEconomicos
                onIngresosSeleccionados={handleIngresosSeleccionados}
                onIngresosMapeados={handleIngresosMapeados}
              />
            </div>
          </div>

          <div className='group-container'>
            <h2 className='group-label'>Cohesión social</h2>
            <div className='selector-item'>
              <p className='selector-label'>Cohesión social</p>
              <MapeoCohesionSocial
                onCohesionSocialSeleccionado={handleCohesionSocialSeleccionado}
                onCohesionSocialMapeado={handleCohesionSocialMapeado}
              />
            </div>
          </div>

          <h1 className='modelo-label'>Modelo: {modelo}</h1>
        </div>
      </div>
    </div> */}
        {/* -------------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default Modelo;
