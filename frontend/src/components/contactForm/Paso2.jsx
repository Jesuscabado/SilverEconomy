import React, { useState } from "react";
import { uploadFile } from "../../Firebase";

const Paso2 = ({ nextStep }) => {
  const [idioma, setIdioma] = useState("");
  const [file, setFile] = useState(null);
  const [mensaje, setMensaje] = useState("");
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

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleNextStep = () => {
    if (idioma !== "" && mensaje !== "") {
      const datosPaso2 = {
        idioma,
        mensaje,
      };
      nextStep(datosPaso2);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      /* const result = await uploadFile(file); // Subir el archivo y obtener la URL */
      /*       console.log(result); // tiene la URL del archivo
       */
      const datosPaso2 = {
        idioma,
        mensaje,
        /*         archivoURL: result, // Agregar la URL del archivo al objeto de datos del Paso 2
         */
      };
      nextStep(datosPaso2);
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
          value={mensaje}
          onChange={handleMensajeChange}
          placeholder='Explicanos sobre qué quieres realizar tu consulta, sugerencia o comunicación o de qué quieres quejarte'
          rows={4}
          cols={50}
        />
      </label>
      <br />
      {/*  formulario de subir archivo */}
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        {/* <input
          type='file'
          name='file'
          id='file'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'>
          Adjuntar archivo
        </button> */}
      </form>
      <br />
      <label>
        Idioma de respuesta:
        <br />
        <select value={idioma} onChange={handleIdiomaChange}>
          <option value=''>Selecciona el idioma</option>
          <option value='euskera'>Euskera</option>
          <option value='castellano'>Castellano</option>
        </select>
      </label>
      <br />
      <button
        onClick={handleNextStep} /*  
        disabled={idioma === "" || mensaje === ""}*/
      >
        Siguiente
      </button>
    </div>
  );
};
export default Paso2;
