import React, { useState } from "react";
import "../../css/Paso1.css";

const Paso1 = ({ nextStep }) => {
  const [demanda, setDemanda] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [tema, setTema] = useState("");
  const demandas = ["consulta", "queja", "sugerencia", "comunicación"];
  const departamentos = [
    "Selecciona el departamento",
    "Desconozco el departamento",
    "Departamento de Accion Social",
    "Departamento de Administracion Publica y Relaciones institucionales",
    "Departamento de Empleo, Inclusion Social e Igualdad",
    "Departamento de Euskera, Cultura y Deporte",
    "Departamento de Hacienda y Finanzas",
    "Departamento de Infraestructuras y Desarrollo Territorial",
    "Departamento de Promocon Economica",
    "Departamento de Sostenibilidad y Medio Natural",
    "Departamento de Transportes, Movilidad Sostenible",
    "Unidad de Apoyo al Diputado General",
  ];
  const temas = [
    "Selecciona el tema",
    "Desconozco el tema",
    "Bolsas de trabajo",
    "Oferta de empleo público",
    "OPE (proceso de estabilizacion y ordinario)",
    "Prevencion, extincion de incendios y salvamento",
  ];

  const handleDemandaChange = (event) => {
    setDemanda(event.target.value);
  };

  const handleDepartamentoChange = (event) => {
    setDepartamento(event.target.value);
    setTema("");
  };

  const handleNextStep = () => {
    if (demanda !== "" && departamento !== "" && tema !== "") {
      const datosPaso1 = {
        demanda,
        departamento,
        tema,
      };
      nextStep(datosPaso1);
    }
  };

  const handleTemaChange = (event) => {
    setTema(event.target.value);
  };

  return (
    <div className='clasepaso1'>
      <h3 className='clasepaso1titulo'>Paso 1: Tipo de demanda</h3>
      <div className='clasepaso1realizar'>
        <label>
          ¿Qué deseas realizar?
          <br />
          {demandas.map((opcion) => (
            <div key={opcion}>
              <input
                type='radio'
                id={opcion}
                name='demanda'
                value={opcion}
                checked={demanda === opcion}
                onChange={handleDemandaChange}
              />
              <label htmlFor={opcion}>{opcion}</label>
            </div>
          ))}
        </label>
      </div>
      <div className='clasepaso1departamento'>
        <label>
          Departamento:
          <br />
          <select value={departamento} onChange={handleDepartamentoChange}>
            {departamentos.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className='clasepaso1tema'>
        <label>
          Tema:
          <br />
          <select value={tema} onChange={handleTemaChange}>
            {temas.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        className='mt-5 boton1 hover-button py-2 px-4 rounded-md shadow-lg focus:outline-none transform transition-all duration-200 ease-in-out hover:scale-105'
        onClick={handleNextStep}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paso1;
