import React from "react";
import ImageSlider from "./ImageSlider";
import soledad1 from "../img/soledad1.jpg";
import soledad2 from "../img/soledad2.jpg";
import soledad3 from "../img/soledad3.jpg";
import soledad4 from "../img/soledad4.jpg";
import soledad5 from "../img/soledad5.jpg";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

function Web() {
  const slides = [
    { url: soledad1, title: "Cumpleaños" },
    {
      url: soledad2,
      title:
        "Este banco de datos tiene como objetivo poner a disposición de todas aquellas personas interesadas en el envejecimiento los principales indicadores descriptivos y de evolución de este ámbito.",
    },
    { url: soledad3, title: "ventana" },
  ];

  const containerStyles = {
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
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
  };
  return (
    <div>
      <Navbar />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div style={odsContainerStyles}>
        <img src={soledad5} alt='ODS' style={imageStyles} />
        <div style={odsTextStyles}>
          <h2>ODS</h2>
          <p>
            Proyecto piloto de centro comarcal integral de accioón social de
            Bizkaia
          </p>
        </div>
      </div>
      <div style={agendaContainerStyles}>
        <div style={agendaTextStyles}>
          <h2>Agenda</h2>
          <p>Programa de plan de acciones</p>
        </div>
        <img src={soledad4} alt='Agenda' style={imageStyles} />
      </div>
      <Footer />
    </div>
  );
}

export default Web;
