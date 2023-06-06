import React from "react";

import { Helmet } from "react-helmet";

import "../css/BoxIniciarSesin.css";

const BoxIniciarSesin = (props) => {
  return (
    <div className='box-iniciar-sesin-container'>
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className='box-iniciar-sesin-box-iniciar-sesin'>
        <img
          src='/external/rectangle157i395-vwvk-700h.png'
          alt='Rectangle157I395'
          className='box-iniciar-sesin-rectangle157'
        />
        <div className='box-iniciar-sesin-frame23'>
          <span className='box-iniciar-sesin-text'>
            <span>Iniciar sesión</span>
          </span>
          <div className='box-iniciar-sesin-frame22'>
            <div className='box-iniciar-sesin-frame18'>
              <img
                src='/external/rectangle158i395-yi98-200h.png'
                alt='Rectangle158I395'
                className='box-iniciar-sesin-rectangle158'
              />
            </div>
            <div className='box-iniciar-sesin-frame21'>
              <div className='box-iniciar-sesin-frame20'>
                <div className='box-iniciar-sesin-frame19'>
                  <img
                    src='/external/rectangle159i395-cqyq-200h.png'
                    alt='Rectangle159I395'
                    className='box-iniciar-sesin-rectangle159'
                  />
                </div>
              </div>
              <div className='box-iniciar-sesin-frame17'>
                <div className='box-iniciar-sesin-frame16'>
                  <span className='box-iniciar-sesin-text02 Contenido'>
                    <span className='box-iniciar-sesin-text03'>
                      ¿Has olvidado tu contraseña? Pincha
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>aquí</span>
                  </span>
                  <div className='box-iniciar-sesin-frame15'>
                    <span className='box-iniciar-sesin-text05'>
                      <span>Iniciar sesión</span>
                    </span>
                  </div>
                </div>
                <div className='box-iniciar-sesin-frame14'>
                  <span className='box-iniciar-sesin-text07 Contenido'>
                    <span>¿No tienes una cuenta?</span>
                  </span>
                  <div className='box-iniciar-sesin-frame13'>
                    <span className='box-iniciar-sesin-text09 Título24Bold'>
                      <span>Regístrate</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className='box-iniciar-sesin-text11 Título24Bold'>
          <span>Usuario / DNI</span>
        </span>
        <span className='box-iniciar-sesin-text13 Título24Bold'>
          <span>Contraseña</span>
        </span>
      </div>
    </div>
  );
};

export default BoxIniciarSesin;
