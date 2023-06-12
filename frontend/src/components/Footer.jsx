import React from "react";
import AvisoLegal from "./AvisoLegal";
import ContactForm from "./contactForm/ContactForm";
import { Link, Route, Routes } from "react-router-dom";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "lightgray",
    padding: "20px",
    textAlign: "center",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyles}>
      <div className="text-center">
        Copyright © 2023 ·
        <Routes>
          <Route path="/Avisolegal" component={AvisoLegal} />
        </Routes>
        <Link className="text-decoration-none custom-link" to="/avisolegal">
          Aviso legal
        </Link>
        <Routes>
          <Route path="/contact" component={ContactForm} />
        </Routes>
        <Link className="text-decoration-none custom-link" to="/contact">
          Formulario de contacto
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
