import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import soledad1 from "../img/soledad1.jpg";
import soledad2 from "../img/soledad2.jpg";
import soledad3 from "../img/soledad3.jpg";
import soledad4 from "../img/soledad4.jpg";
import soledad5 from "../img/soledad5.jpg";
import soledad6 from "../img/soledad6.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoginOverlay from "./LoginOverlay"; // Corregido

import "../css/LoginOverlay.css";

function Web() {
  const [showLogin, setShowLogin] = useState(false);

  const slides = [
    {
      url: soledad1,
      title: " ",
      content: (
        <>
          <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button>
        </>
      ),
    },
    {
      url: soledad2,
      title: " ",
    },
    { url: soledad3, title: "" },
  ];

  const containerStyles = {
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
    backgroundColor: "white", // Agregar estilo de fondo blanco
  };
  const odsContainerStyles = {
    width: "100vw",
    height: "50vh",
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const agendaContainerStyles = {
    width: "100vw",
    height: "50vh",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const odsTextStyles = {
    marginLeft: "20px",
  };

  const agendaTextStyles = {
    marginRight: "20px",
  };

  const imageStyles = {
    maxWidth: "80%",
    maxHeight: "80%",
    borderRadius: "10px",
  };
  return (
    <div>
      <div>
        <Navbar onLoginClick={() => setShowLogin(true)} />
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      {showLogin && <LoginOverlay onClose={() => setShowLogin(false)} />}{" "}
      {/* Corregido */}
      <div style={odsContainerStyles}>
        <img src={soledad4} alt='ODS' style={imageStyles} />
        <div style={odsTextStyles}>
          <h2>
            Soledad no deseada en personas mayores afecta a más del 56% de los
            mayores de 65 años.
          </h2>
          <p className=''>
            El envejecimiento de la población puede acentuar situaciones de
            soledad, pero existen otros factores sociales y estructurales que
            han contribuido a su aumento también en otros tramos de edad:
            cambios en el estilo de vida, sociedades más compartimentadas e
            individualistas, ritmos de vida más acelerados, crecimiento de las
            ciudades y despoblación del medio rural.
          </p>
        </div>
      </div>
      <div style={agendaContainerStyles}>
        <div style={agendaTextStyles}>
          <h2>
            Los jóvenes sufren la soledad no deseada el doble que las personas
            mayores.
          </h2>
          <p>
            La soledad elegida no supone un problema, pero la soledad no deseada
            sí que tiene consecuencias negativas para la persona que la sufre.
            También existen personas que viven acompañadas y, sin embargo, se
            sienten solas, a menudo con un sentimiento de exclusión y de falta
            de conexión con lo que les rodea (sociedad, entorno, familia, lugar
            en el que viven…). Por lo tanto, se habla de soledad como
            sentimiento, expresado en términos como “me siento sola, me siento
            solo”. Ese sentimiento de soledad es negativo para la salud física y
            emocional de la persona, y es susceptible de afectar a personas de
            todas las edades.
          </p>
        </div>
        <img src={soledad5} alt='' style={imageStyles} />
      </div>
      <div style={agendaContainerStyles}>
        <div style={agendaTextStyles}>
          <h2>Experiencias de fragilidad y soledad en el envejecimiento.</h2>
          <p>
            Las personas que experimentan soledad, como cualquier otra emoción
            negativa, en general tratan de aplicar estrategias para afrontar
            esta situación o minimizar los efectos negativos. Es decir, la
            soledad es un estado que la persona trata de gestionar con mayor o
            menor éxito. Sin embargo, las estrategias que las personas mayores
            aplican para abordar y gestionar la soledad minimizando sus
            consecuencias más negativas pueden ser muy variadas.{" "}
          </p>
        </div>
        <img src={soledad6} alt='' style={imageStyles} />
      </div>
      <Footer />
    </div>
  );
}

export default Web;
