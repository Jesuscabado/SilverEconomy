import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import soledad1 from "../img/soledad1.jpg";
import soledad2 from "../img/soledad2.png";
import soledad3 from "../img/soledad3.png";
import soledad4 from "../img/soledad4.jpg";
import soledad5 from "../img/soledad5.jpg";
import soledad6 from "../img/soledad6.jpg";
import facebook from "../img/IconosFooter/facebook.png";
import twitter from "../img/IconosFooter/twitter.png";
import youtube from "../img/IconosFooter/youtube.png";
import iconoMas from "../img/IconosFooter/iconoMas.png";
import Bizkaia from "../img/IconosFooter/Bizkaia.png";
import Zitek from "../img/IconosFooter/Zitek.png";
import MondragonAcademy from "../img/IconosFooter/MondragonAcademy.png";
import UniversidadDeusto from "../img/IconosFooter/UniversidadDeusto.png";
import MondragonUniversidad from "../img/IconosFooter/MondragonUniversidad.png";
import logoCofinanciado from "../img/IconosFooter/logoCofinanciado.png";
import Upv from "../img/IconosFooter/Upv.png";
import Mern from "../img/IconosFooter/Mern.png";
import Contacto from "../img/contacto.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoginOverlay from "./LoginOverlay"; // Corregido
/* import RegisterOverlay from "./RegisterOverlay"; // Corregido */

import "../css/LoginOverlay.css";
import "../css/Home.css";

function Web({ onLoginClick }) {
  const [showLogin, setShowLogin] = useState(false);

  /*   const [showRegister, setShowRegister] = useState(false); */

  const slides = [
    {
      url: soledad1,
      title: " ",
      content: (
        <>
          {/* <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button> */}
        </>
      ),
    },
    {
      url: soledad2,
      title: " ",
      content: (
        <>
          {/*  <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button> */}
        </>
      ),
    },
    {
      url: soledad3,
      title: "",
      content: (
        <>
          {/*   <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button> */}
        </>
      ),
    },
  ];

  const containerStyles = {
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
    backgroundColor: "white", // Agregar estilo de fondo blanco
  };
  const odsContainerStyles = {
    width: "80vw",
    height: "50vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const agendaContainerStyles = {
    width: "80vw",
    height: "50vh",
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

  const handleLoginClick = () => {
    setShowLogin(true);
    if (typeof onLoginClick === "function") {
      onLoginClick();
    }
  };

  return (
    <div>
      <div>
        <Navbar onLoginClick={() => setShowLogin(true)} />
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} onLoginClick={handleLoginClick} />
      </div>
      {showLogin && <LoginOverlay onClose={() => setShowLogin(false)} />}
      {/* Corregido */}

      <div className="OdsContainer">
        <div style={odsContainerStyles}>
          <img src={soledad4} alt="ODS" style={imageStyles} />
          <div style={odsTextStyles}>
            <h2>
              Soledad no deseada en personas mayores afecta a más del 56% de los
              mayores de 65 años.
            </h2>
            <p className="">
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
              La soledad elegida no supone un problema, pero la soledad no
              deseada sí que tiene consecuencias negativas para la persona que
              la sufre. También existen personas que viven acompañadas y, sin
              embargo, se sienten solas, a menudo con un sentimiento de
              exclusión y de falta de conexión con lo que les rodea (sociedad,
              entorno, familia, lugar en el que viven…). Por lo tanto, se habla
              de soledad como sentimiento, expresado en términos como “me siento
              sola, me siento solo”. Ese sentimiento de soledad es negativo para
              la salud física y emocional de la persona, y es susceptible de
              afectar a personas de todas las edades.
            </p>
          </div>
          <img src={soledad5} alt="" style={imageStyles} />
        </div>

        <div style={odsContainerStyles}>
          <img src={soledad6} alt="ODS" style={imageStyles} />
          <div style={odsTextStyles}>
            <h2>Experiencias de fragilidad y soledad en el envejecimiento.</h2>
            <p className="">
              Las personas que experimentan soledad, como cualquier otra emoción
              negativa, en general tratan de aplicar estrategias para afrontar
              esta situación o minimizar los efectos negativos. Es decir, la
              soledad es un estado que la persona trata de gestionar con mayor o
              menor éxito. Sin embargo, las estrategias que las personas mayores
              aplican para abordar y gestionar la soledad minimizando sus
              consecuencias más negativas pueden ser muy variadas.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="NewsletterBox">
        <title>Caja de Suscripción</title>

        <h1>Suscríbete a nuestra newsletter</h1>
        <p>
          Recibe las últimas noticias y actualizaciones directamente en tu
          bandeja de entrada.
        </p>
        <label>
          <input type="checkbox" name="privacy" required />
          He leído y acepto la información en Protección de Datos
        </label>
        <button>Suscribirse</button>
      </div>
      <div className="ContactFormBox">
        <title>Formulario de contacto</title>
        <img className="imgContacto" src={Contacto} alt="Contacto" />
        <h1>Consultas, comunicaciones, quejas y suguerencias</h1>
        <p>
          Si deseas realizar una consulta, remitir una comunicacion o realizar
          cualquier sugerencia, lo podras hacer mediante este formulario.
        </p>

        <button>
          <Link className="text-decoration-none custom-link" to="/formulario">
            Rellenar formulario
          </Link>
        </button>
      </div>
      {/*  <div className="ColaboradorasTitle"></div> */}

      <div className="Iconos">
        <h1>Colaboradoras</h1>
        <br />
        <h2>
          Si formas parte del ecosistema de inovacion de Bizkaia y quieres
          colaborar con GovTech Lab Bizkaia escribenos al mail
          govtechlab@bizkaia.eus.
        </h2>

        <div className="Colaboradoras">
          <img src={MondragonAcademy} /*  alt="Mondragon Academy" */ />
          <img src={MondragonUniversidad} alt="Mondragon Universidad" />
          <img src={Zitek} alt="Zitek" />
          <img src={Upv} alt="Upv" />
          <img src={UniversidadDeusto} alt="Universidad Deusto" />
        </div>
        <div className="redesSociales">
          {" "}
          <p>Siguenos en nuestras redes sociales</p>
          <img src={facebook} alt="facebook"></img>
          <img src={twitter} alt="twitter"></img>
          <img src={youtube} alt="youtube"></img>
          <img src={iconoMas} alt="icono+"></img>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Web;
