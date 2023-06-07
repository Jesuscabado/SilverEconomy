import React, { useState } from "react";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [demandType, setDemandType] = useState("");
  const [department, setDepartment] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted!");
    console.log("Demand Type:", demandType);
    console.log("Department:", department);
    console.log("Question Answer:", questionAnswer);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // También puedes utilizar una API o enviar los datos a un servidor

    // Reiniciar los campos del formulario
    setStep(1);
    setDemandType("");
    setDepartment("");
    setQuestionAnswer("");
    setName("");
    setEmail("");
    setMessage("");
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <p>¿Qué deseas realizar?</p>
            <label>
              <input
                type="radio"
                name="demandType"
                value="Consulta"
                checked={demandType === "Consulta"}
                onChange={(e) => setDemandType(e.target.value)}
              />
              Consulta
            </label>
            <label>
              <input
                type="radio"
                name="demandType"
                value="Queja"
                checked={demandType === "Queja"}
                onChange={(e) => setDemandType(e.target.value)}
              />
              Queja
            </label>
            <label>
              <input
                type="radio"
                name="demandType"
                value="Sugerencia"
                checked={demandType === "Sugerencia"}
                onChange={(e) => setDemandType(e.target.value)}
              />
              Sugerencia
            </label>
            <label>
              <input
                type="radio"
                name="demandType"
                value="Comunicación"
                checked={demandType === "Comunicación"}
                onChange={(e) => setDemandType(e.target.value)}
              />
              Comunicación
            </label>
            <button onClick={handleNextStep}>Siguiente</button>
          </div>
        );
      case 2:
        return (
          <div>
            <label htmlFor="questionAnswer">Pregunta adicional:</label>
            <select
              id="questionAnswer"
              value={questionAnswer}
              onChange={(e) => setQuestionAnswer(e.target.value)}
            >
              <option value="">Selecciona departamento</option>
              <option value="Respuesta 1">Desconozco el departamento</option>
              <option value="Respuesta 2">
                Departamaento de Accion Social
              </option>
              <option value="Respuesta 3">
                Departamento de Administracion Publica y Relaciones
                Institucionales
              </option>
              <option value="Respuesta 4">
                Departamento de Empleo, Inclución Social e Igualdad
              </option>
            </select>
            <button onClick={handleNextStep}>Siguiente</button>
          </div>
        );

      case 3:
        return (
          <div>
            <label htmlFor="department">Selecciona el tema</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Selecciona un departamento</option>
              <option value="Ventas">Ventas</option>
              <option value="Soporte">Soporte</option>
              <option value="Facturación">Facturación</option>
              <option value="Otros">Otros</option>
            </select>
            <button onClick={handleNextStep}>Siguiente</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Tipo de Demanda:</h2>
      <p>{demandType}</p>
      <form onSubmit={handleSubmit}>
        {renderFormStep()}
        {step === 3 && (
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
