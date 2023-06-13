import React, { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

/* import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
 */
const Paso3 = ({ file, setFile, datosPaso1, datosPaso2 }) => {
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
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  /*   const [fileURL, setFileURL] = useState(""); // Agregado: Estado para la URL del archivo
   */

  const { demanda, departamento, tema } = datosPaso1;
  const { idioma, mensaje } = datosPaso2;

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const firestore = getFirestore();
      const collectionRef = collection(firestore, "FormulariosContacto");

      // Crea un objeto con los datos del formulario
      const formData = {
        /*  fileURL, */
        email,
        confirmarEmail,
        sexo,
        nombre,
        dni,
        telefono,
        calle,
        numero,
        piso,
        municipio,
        codigoPostal,
        autorizacion,
        demanda,
        departamento,
        tema,
        idioma,
        mensaje,
      };

      // Almacena los datos del formulario en Firestore
      await addDoc(collectionRef, formData); // Utiliza addDoc en lugar de collectionRef.add

      console.log("Datos enviados correctamente");
      // Realiza las acciones necesarias, como mostrar un mensaje de éxito o redirigir al usuario a otra página

      setSuccessMessage(true); // Show success message

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form /* onSubmit={handleSubmit} encType='multipart/form-data' */>
        {/*  <input
          type='file'
          name='file'
          id='file'
          onChange={(e) => setFile(e.target.files[0])}
        /> */}
        <h3>Paso 3: Datos personales</h3>
        <p>Los campos marcados con el signo (*) son obligatorios.</p>
        <label>
          E-mail (*):
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Confirmar e-mail (*):
          <input
            type='email'
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
            <option value=''>Selecciona el sexo</option>
            <option value='Hombre'>Hombre</option>
            <option value='Mujer'>Mujer</option>
            <option value='Otros'>Otros</option>
          </select>
        </label>
        <br />
        <h4>Datos opcionales</h4>
        <label>
          Nombre y apellidos:
          <input type='text' value={nombre} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
          DNI:
          <input type='text' value={dni} onChange={handleDniChange} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type='text' value={telefono} onChange={handleTelefonoChange} />
        </label>
        <br />
        <p>
          En el caso de que el trámite sea complicado de realizar vía email, nos
          pondremos en contacto vía telefónica.
        </p>
        <label>
          Calle:
          <input type='text' value={calle} onChange={handleCalleChange} />
        </label>
        <br />
        <label>
          Número:
          <input type='text' value={numero} onChange={handleNumeroChange} />
        </label>
        <br />
        <label>
          Piso:
          <input type='text' value={piso} onChange={handlePisoChange} />
        </label>
        <br />
        <label>
          Municipio:
          <input
            type='text'
            value={municipio}
            onChange={handleMunicipioChange}
          />
        </label>
        <br />
        <label>
          Código postal:
          <input
            type='text'
            value={codigoPostal}
            onChange={handleCodigoPostalChange}
          />
        </label>
        <br />
        <p>
          Protección de datos personales y garantía de los derechos digitales
        </p>
        <label>
          <input
            type='checkbox'
            checked={autorizacion}
            onChange={handleAutorizacionChange}
            required
          />
          Autorizo a la Dirección General de Digitalización y Atención Ciudadana
          a derivar mi demanda al Departamento de la Diputación Foral de Bizkaia
          competente para su tramitación. Y en el supuesto de que la demanda no
          se refiera a una materia competencia de la Diputación Foral de
          Bizkaia, presto mi consentimiento para que, si es posible, se dé
          traslado de la misma a la Administración Pública u organismo
          correspondiente. (*)
        </label>
        <br />
        <button onClick={handleSubmit}>Enviar</button>
        {successMessage && <p>Mensaje enviado</p>}
      </form>
    </div>
  );
};

export default Paso3;
