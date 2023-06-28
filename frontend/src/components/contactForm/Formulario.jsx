import React, { useState } from "react";
import Paso1 from "../../components/contactForm/Paso1";
import Paso2 from "../../components/contactForm/Paso2";
import Paso3 from "../../components/contactForm/Paso3";
import "../../css/Formulario.css";

const FormularioEnTresPasos = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [datosPaso1, setDatosPaso1] = useState({});
  const [datosPaso2, setDatosPaso2] = useState({});

  const handleNextStep = (data) => {
    setStep(step + 1);

    if (step === 1) {
      setDatosPaso1(data);
    } else if (step === 2) {
      setDatosPaso2(data);
    }
  };

  return (
    <div className="formularioFondo">
      <div className="formulario">
        {step === 1 && <Paso1 nextStep={handleNextStep} className="paso1" />}
        {step === 2 && (
          <Paso2
            nextStep={handleNextStep}
            datosPaso1={datosPaso1}
            className="paso2"
          />
        )}
        {step === 3 && (
          <Paso3
            file={file}
            setFile={setFile}
            datosPaso1={datosPaso1}
            datosPaso2={datosPaso2}
            className="paso3"
          />
        )}
      </div>
    </div>
  );
};

export default FormularioEnTresPasos;
