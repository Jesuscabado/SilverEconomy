import React, { useState } from "react";
import soledad1 from "../img/soledad1.jpg";
import soledad2 from "../img/soledad2.png";
import soledad3 from "../img/soledad3.png";
import "../css/ImageSlider.css";

const ImageSlider = ({ onLoginClick }) => {
  const [showLogin, setShowLogin] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: soledad1,
      title: "Aquí puedes agregar tu contenido personalizado",
      buttonText: "Aquí",
      content: (
        <>
          <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button>
        </>
      ),
      position: "center", // Posición a la derecha
      opacity: true, // Oscurecer la imagen del slide soledad1
      paddingTop: "200px", // Alineación centrada
    },
    {
      url: soledad2,
      title: "Aplicación web para paliar la soledad",
      description:
        "desde el ámbito de las transacciones burocráticas y del día a día",
      buttonText: "Descargar",
      content: (
        <>
          {/*  <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button> */}
        </>
      ),
      position: "right", // Posición a la derecha
      opacity: true, // Oscurecer la imagen del slide soledad1
    },
    {
      url: soledad3,
      title: "sdgsdg",
      buttonText: "sdgsdg",
      content: (
        <>
          {/*   <p>Aquí puedes agregar tu contenido personalizado</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Aquí
          </button> */}
        </>
      ),
      position: "right", // Posición a la derecha
      opacity: true, // Oscurecer la imagen del slide soledad1
      marginTop: "-200px", // Alineación centrada
    },
  ];

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Color de fondo semitransparente
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    /* backgroundPosition: "right", */
    backgroundSize: "cover",
    backgroundPosition: slides[currentIndex].position,
    opacity: slides[currentIndex].opacity,
    backgroundImage:
      slides.length > 0 ? `url(${slides[currentIndex].url})` : "",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate (0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    zIndex: "99",
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    marginTop: "-50px",
    color: "white",
  };

  const contentContainerStyles = {
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingTop: slides[currentIndex].paddingTop,
    marginTop: slides[currentIndex].marginTop,
    visibility: currentIndex === 0 ? "visible" : "hidden",
  };

  const buttonTextStyles = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
    backgroundColor: "#fff",
  };

  const goToPrevious = () => {
    const isFirstSilde = currentIndex === 0;
    const newIndex = isFirstSilde ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    onLoginClick();
  };

  return (
    <div style={sliderStyles}>
      <div style={overlayStyles}></div>
      <div style={contentContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              visibility: currentIndex === index ? "visible" : "hidden",
            }}
          >
            <h2 className='text-white px-4 py-2 rounded m-4 title'>
              {slide.title}
            </h2>
            <div>
              <p>{slide.description}</p>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded m-4'
                onClick={handleLoginClick}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ‹
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ›
      </div>
      <div style={slideStyles}></div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            ○
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;

/* 
  
  return (
    <div style={sliderStyles}>
      <div style={contentContainerStyles}>
        {currentIndex === 0 && (
          <>
            <h2>{slides[currentIndex].title}</h2>
            <div>
              <p>Inicia sesión o regístrate para obtener datos</p>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded m-4'
                onClick={handleLoginClick}
              >
                Aquí
              </button>
            </div>
          </>
        )}
        {currentIndex === 1 && (
          <>
            <h2>{slides[currentIndex].title}</h2>
            <div>
              <p>Inicia sesión </p>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded m-4'
                onClick={handleLoginClick}
              >
                Aquí
              </button>
            </div>
          </>
        )}
        {currentIndex === 2 && (
          <>
            <h2>{slides[currentIndex].title}</h2>
            <div>
              <p>Inicia datos</p>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded m-4'
                onClick={handleLoginClick}
              >
                Aquí
              </button>
            </div>
          </>
        )}
      </div>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ‹
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ›
      </div>
      <div style={slideStyles}></div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            ○
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
 */
