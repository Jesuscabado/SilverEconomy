import React, { useState } from "react";
import { uploadFile } from "../../Firebase";
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
      nextStep();
    }
  };

  const handleTemaChange = (event) => {
    setTema(event.target.value);
  };

  return (
    <div>
      <h3>Paso 1: Tipo de demanda</h3>
      <div>
        <label>
          ¿Qué deseas realizar?
          <br />
          {demandas.map((opcion) => (
            <div key={opcion}>
              <input
                type="radio"
                name="demanda"
                value={opcion}
                checked={demanda === opcion}
                onChange={handleDemandaChange}
              />
              {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
            </div>
          ))}
        </label>
      </div>

      {demanda !== "" && (
        <div>
          <label>
            ¿Con qué departamento deseas comunicarte?
            <br />
            <select value={departamento} onChange={handleDepartamentoChange}>
              {departamentos.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
            <br></br>
          </label>
          {departamento !== "Selecciona el departamento" && (
            <label>
              ¿Cuál es el tema de tu {demanda}?
              <br />
              <select value={tema} onChange={handleTemaChange}>
                {temas.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      )}

      <button
        onClick={handleNextStep}
        disabled={demanda === "" || departamento === ""}
      >
        Siguiente
      </button>
    </div>
  );
};

const Paso2 = ({ nextStep }) => {
  const [idioma, setIdioma] = useState("");
  const [file, setFile] = useState(null);
  const tiposArchivoPermitidos = [
    "pdf",
    "doc",
    "docx",
    "txt",
    "jpg",
    "jpeg",
    "gif",
    "png",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "pps",
  ];

  const handleIdiomaChange = (event) => {
    setIdioma(event.target.value);
  };

  const handleNextStep = () => {
    if (idioma !== "") {
      nextStep();
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await uploadFile(file);
      console.log(result); // tiene la URL del archivo
    } catch (error) {
      console.log(error);
      alert("Hubo un error al subir el archivo");
    }
  };

  return (
    <div>
      <h3>Paso 2: Mensaje</h3>
      <label>
        Motivo de la consulta:
        <br />
        <textarea
          placeholder="Explicanos sobre qué quieres realizar tu consulta, sugerencia o comunicación o de qué quieres quejarte"
          rows={4}
          cols={50}
        />
      </label>
      <br />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white">
          Adjuntar archivo
        </button>
      </form>
      <br />
      <label>
        Idioma de respuesta:
        <br />
        <select value={idioma} onChange={handleIdiomaChange}>
          <option value="">Selecciona el idioma</option>
          <option value="euskera">Euskera</option>
          <option value="castellano">Castellano</option>
        </select>
      </label>
      <br />
      <button onClick={handleNextStep} disabled={idioma === ""}>
        Siguiente
      </button>
    </div>
  );
};

const Paso3 = () => {
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [autorizacion, setAutorizacion] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmarEmailChange = (event) => {
    setConfirmarEmail(event.target.value);
  };

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleCalleChange = (event) => {
    setCalle(event.target.value);
  };

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const handlePisoChange = (event) => {
    setPiso(event.target.value);
  };

  const handleMunicipioChange = (event) => {
    setMunicipio(event.target.value);
  };

  const handleCodigoPostalChange = (event) => {
    setCodigoPostal(event.target.value);
  };

  const handleAutorizacionChange = (event) => {
    setAutorizacion(event.target.checked);
  };

  return (
    <div>
      <h3>Paso 3: Datos personales</h3>
      <p>Los campos marcados con el signo (*) son obligatorios.</p>
      <label>
        E-mail (*):
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <br />
      <label>
        Confirmar e-mail (*):
        <input
          type="email"
          value={confirmarEmail}
          onChange={handleConfirmarEmailChange}
          required
        />
      </label>
      <br />
      <label>
        Sexo (*):
        <br />
        <select value={sexo} onChange={handleSexoChange} required>
          <option value="">Selecciona el sexo</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otros">Otros</option>
        </select>
      </label>
      <br />
      <h4>Datos opcionales</h4>
      <label>
        Nombre y apellidos:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        DNI:
        <input type="text" value={dni} onChange={handleDniChange} />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={handleTelefonoChange} />
      </label>
      <br />
      <p>
        En el caso de que el trámite sea complicado de realizar vía email, nos
        pondremos en contacto vía telefónica.
      </p>
      <label>
        Calle:
        <input type="text" value={calle} onChange={handleCalleChange} />
      </label>
      <br />
      <label>
        Número:
        <input type="text" value={numero} onChange={handleNumeroChange} />
      </label>
      <br />
      <label>
        Piso:
        <input type="text" value={piso} onChange={handlePisoChange} />
      </label>
      <br />
      <label>
        Municipio:
        <input type="text" value={municipio} onChange={handleMunicipioChange} />
      </label>
      <br />
      <label>
        Código postal:
        <input
          type="text"
          value={codigoPostal}
          onChange={handleCodigoPostalChange}
        />
      </label>
      <br />
      <p>Protección de datos personales y garantía de los derechos digitales</p>
      <label>
        <input
          type="checkbox"
          checked={autorizacion}
          onChange={handleAutorizacionChange}
          required
        />
        Autorizo a la Dirección General de Digitalización y Atención Ciudadana a
        derivar mi demanda al Departamento de la Diputación Foral de Bizkaia
        competente para su tramitación. Y en el supuesto de que la demanda no se
        refiera a una materia competencia de la Diputación Foral de Bizkaia,
        presto mi consentimiento para que, si es posible, se dé traslado de la
        misma a la Administración Pública u organismo correspondiente. (*)
      </label>
      <br />
      <button>Enviar</button>
    </div>
  );
};

const FormularioEnTresPasos = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Paso1 nextStep={handleNextStep} />}
      {step === 2 && <Paso2 nextStep={handleNextStep} />}
      {step === 3 && <Paso3 />}
    </div>
  );
};

export default FormularioEnTresPasos;
