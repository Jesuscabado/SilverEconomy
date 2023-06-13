import React, { useState } from "react";
import Paso1 from "../../components/contactForm/Paso1";
import Paso2 from "../../components/contactForm/Paso2";
import Paso3 from "../../components/contactForm/Paso3";

const FormularioEnTresPasos = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [datosPaso1, setDatosPaso1] = useState({}); // Estado para almacenar los datos del Paso 1
  const [datosPaso2, setDatosPaso2] = useState({}); // Estado para almacenar los datos del Paso 1

  const handleNextStep = (data) => {
    setStep(step + 1);

    if (step === 1) {
      setDatosPaso1(data);
    } else if (step === 2) {
      setDatosPaso2(data); // Almacena los datos del Paso 2 en el estado
    }
  };

  return (
    <div className='formulario'>
      {step === 1 && <Paso1 nextStep={handleNextStep} />}
      {step === 2 && (
        <Paso2 nextStep={handleNextStep} datosPaso1={datosPaso1} />
      )}
      {/* Pasa los datos del Paso 1 al Paso 2 */}
      {step === 3 && (
        <Paso3
          file={file}
          setFile={setFile}
          datosPaso1={datosPaso1}
          datosPaso2={datosPaso2}
        />
      )}
      {/* Pasa los datos del Paso 1 al Paso 3 */}
    </div>
  );
};

export default FormularioEnTresPasos;
