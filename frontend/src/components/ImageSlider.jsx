import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [showLogin, setShowLogin] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
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
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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

  return (
    <div style={sliderStyles}>
      <div style={contentContainerStyles}>
        {currentIndex === 0 && (
          <>
            <h2>{slides[currentIndex].title}</h2>
            <div>
              <p>Inicia sesión o regístrate para obtener datos</p>
              <button className='bg-red-500 text-white px-4 py-2 rounded m-4'>
                {/* onLoginClick={() => setShowLogin(true)} */} Aquí
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
