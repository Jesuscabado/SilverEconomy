import React, { useEffect, useState } from "react";
import "../css/SideBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SideBar() {
  const { user, logout, loading } = useAuth();
  const [activeItem, setActiveItem] = useState("Panel");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Obtiene el tamaño inicial de la ventana
    // Agregar el event listener al cargar el componente
    window.addEventListener("resize", handleResize);

    // Remover el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!user) {
    console.log("Usuario no autenticado", user);
    window.location.href = "/web";
    // Redirecciona automáticamente al usuario a la página de inicio de sesión
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className='menudashboard'>
      <div>
        <div className='sidebar'>
          <div className='sidebar-wrapper'>
            <div>{user.displayName || user.email.split("@")[0]}</div>
            <ul className='nav'>
              <li
                className={activeItem === "Panel" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("Panel")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/home'>
                  <svg
                    className='icono'
                    width='24'
                    height='23'
                    viewBox='0 0 24 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M23 0.5H1C0.734784 0.5 0.48043 0.605357 0.292893 0.792893C0.105357 0.98043 0 1.23478 0 1.5V20.5C0 21.0304 0.210714 21.5391 0.585786 21.9142C0.960859 22.2893 1.46957 22.5 2 22.5H7C7.53043 22.5 8.03914 22.2893 8.41421 21.9142C8.78929 21.5391 9 21.0304 9 20.5V14.5H15V16.5C15 17.0304 15.2107 17.5391 15.5858 17.9142C15.9609 18.2893 16.4696 18.5 17 18.5H22C22.5304 18.5 23.0391 18.2893 23.4142 17.9142C23.7893 17.5391 24 17.0304 24 16.5V1.5C24 1.23478 23.8946 0.98043 23.7071 0.792893C23.5196 0.605357 23.2652 0.5 23 0.5ZM7 20.5H2V10.5H7V20.5ZM7 8.5H2V2.5H7V8.5ZM15 12.5H9V2.5H15V12.5ZM22 16.5H17V10.5H22V16.5ZM22 8.5H17V2.5H22V8.5Z'
                      fill='#EBEBE6'
                    />
                  </svg>
                  <div>
                    {windowWidth >= 500 ? (
                      <p>Panel</p>
                    ) : (
                      <p style={{ display: "none" }}>Panel</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "Informes" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("Informes")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/informes'>
                  <svg
                    className='icono'
                    width='23'
                    height='27'
                    viewBox='0 0 23 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.6942 7.7925L15.376 0.7925C15.2789 0.699666 15.1635 0.626052 15.0366 0.575864C14.9097 0.525676 14.7737 0.499897 14.6364 0.5H2.09091C1.53637 0.5 1.00453 0.710714 0.612413 1.08579C0.220291 1.46086 0 1.96957 0 2.5V24.5C0 25.0304 0.220291 25.5391 0.612413 25.9142C1.00453 26.2893 1.53637 26.5 2.09091 26.5H20.9091C21.4636 26.5 21.9955 26.2893 22.3876 25.9142C22.7797 25.5391 23 25.0304 23 24.5V8.5C23.0001 8.36864 22.9732 8.23855 22.9207 8.11715C22.8682 7.99576 22.7913 7.88544 22.6942 7.7925ZM15.6818 3.91375L19.4311 7.5H15.6818V3.91375ZM20.9091 24.5H2.09091V2.5H13.5909V8.5C13.5909 8.76522 13.7011 9.01957 13.8971 9.20711C14.0932 9.39464 14.3591 9.5 14.6364 9.5H20.9091V24.5ZM16.7273 14.5C16.7273 14.7652 16.6171 15.0196 16.4211 15.2071C16.225 15.3946 15.9591 15.5 15.6818 15.5H7.31818C7.04091 15.5 6.77499 15.3946 6.57893 15.2071C6.38287 15.0196 6.27273 14.7652 6.27273 14.5C6.27273 14.2348 6.38287 13.9804 6.57893 13.7929C6.77499 13.6054 7.04091 13.5 7.31818 13.5H15.6818C15.9591 13.5 16.225 13.6054 16.4211 13.7929C16.6171 13.9804 16.7273 14.2348 16.7273 14.5ZM16.7273 18.5C16.7273 18.7652 16.6171 19.0196 16.4211 19.2071C16.225 19.3946 15.9591 19.5 15.6818 19.5H7.31818C7.04091 19.5 6.77499 19.3946 6.57893 19.2071C6.38287 19.0196 6.27273 18.7652 6.27273 18.5C6.27273 18.2348 6.38287 17.9804 6.57893 17.7929C6.77499 17.6054 7.04091 17.5 7.31818 17.5H15.6818C15.9591 17.5 16.225 17.6054 16.4211 17.7929C16.6171 17.9804 16.7273 18.2348 16.7273 18.5Z'
                      fill='#EBEBE6'
                    />
                  </svg>

                  <div>
                    {windowWidth >= 500 ? (
                      <p>Informes</p>
                    ) : (
                      <p style={{ display: "none" }}>Informes</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "planaccion" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("planaccion")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/planaccion'>
                  <svg
                    className='icono'
                    width='23'
                    height='25'
                    viewBox='0 0 23 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.9697 8.7925C17.0588 8.88537 17.1295 8.99566 17.1777 9.11706C17.2259 9.23846 17.2508 9.36858 17.2508 9.5C17.2508 9.63142 17.2259 9.76154 17.1777 9.88294C17.1295 10.0043 17.0588 10.1146 16.9697 10.2075L10.2614 17.2075C10.1724 17.3005 10.0667 17.3742 9.95032 17.4246C9.83398 17.4749 9.70927 17.5008 9.58333 17.5008C9.45739 17.5008 9.33269 17.4749 9.21635 17.4246C9.10001 17.3742 8.99432 17.3005 8.90531 17.2075L6.03031 14.2075C5.85049 14.0199 5.74947 13.7654 5.74947 13.5C5.74947 13.2346 5.85049 12.9801 6.03031 12.7925C6.21013 12.6049 6.45403 12.4994 6.70833 12.4994C6.96264 12.4994 7.20653 12.6049 7.38635 12.7925L9.58333 15.0863L15.6136 8.7925C15.7026 8.69952 15.8083 8.62576 15.9247 8.57544C16.041 8.52512 16.1657 8.49921 16.2917 8.49921C16.4176 8.49921 16.5423 8.52512 16.6587 8.57544C16.775 8.62576 16.8807 8.69952 16.9697 8.7925ZM23 2.5V22.5C23 23.0304 22.7981 23.5391 22.4386 23.9142C22.0792 24.2893 21.5917 24.5 21.0833 24.5H1.91667C1.40833 24.5 0.920823 24.2893 0.561379 23.9142C0.201934 23.5391 0 23.0304 0 22.5V2.5C0 1.96957 0.201934 1.46086 0.561379 1.08579C0.920823 0.710714 1.40833 0.5 1.91667 0.5H21.0833C21.5917 0.5 22.0792 0.710714 22.4386 1.08579C22.7981 1.46086 23 1.96957 23 2.5ZM21.0833 22.5V2.5H1.91667V22.5H21.0833Z'
                      fill='#EBEBE6'
                    />
                  </svg>
                  <div>
                    {windowWidth >= 500 ? (
                      <p>Plan de acción</p>
                    ) : (
                      <p style={{ display: "none" }}>Plan de acción</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "proyectos" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("proyectos")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/proyectos'>
                  <svg
                    className='icono'
                    width='23'
                    height='29'
                    viewBox='0 0 23 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.07692 14.4995V12.4995C7.07692 12.2343 7.17012 11.9799 7.33602 11.7924C7.50192 11.6049 7.72692 11.4995 7.96154 11.4995C8.19615 11.4995 8.42116 11.6049 8.58706 11.7924C8.75295 11.9799 8.84615 12.2343 8.84615 12.4995V14.4995C8.84615 14.7647 8.75295 15.0191 8.58706 15.2066C8.42116 15.3942 8.19615 15.4995 7.96154 15.4995C7.72692 15.4995 7.50192 15.3942 7.33602 15.2066C7.17012 15.0191 7.07692 14.7647 7.07692 14.4995ZM11.5 15.4995C11.7346 15.4995 11.9596 15.3942 12.1255 15.2066C12.2914 15.0191 12.3846 14.7647 12.3846 14.4995V11.4995C12.3846 11.2343 12.2914 10.9799 12.1255 10.7924C11.9596 10.6049 11.7346 10.4995 11.5 10.4995C11.2654 10.4995 11.0404 10.6049 10.8745 10.7924C10.7086 10.9799 10.6154 11.2343 10.6154 11.4995V14.4995C10.6154 14.7647 10.7086 15.0191 10.8745 15.2066C11.0404 15.3942 11.2654 15.4995 11.5 15.4995ZM15.0385 15.4995C15.2731 15.4995 15.4981 15.3942 15.664 15.2066C15.8299 15.0191 15.9231 14.7647 15.9231 14.4995V10.4995C15.9231 10.2343 15.8299 9.97994 15.664 9.79241C15.4981 9.60487 15.2731 9.49951 15.0385 9.49951C14.8038 9.49951 14.5788 9.60487 14.4129 9.79241C14.247 9.97994 14.1538 10.2343 14.1538 10.4995V14.4995C14.1538 14.7647 14.247 15.0191 14.4129 15.2066C14.5788 15.3942 14.8038 15.4995 15.0385 15.4995ZM21.2308 6.49951V18.4995H22.1154C22.35 18.4995 22.575 18.6049 22.7409 18.7924C22.9068 18.9799 23 19.2343 23 19.4995C23 19.7647 22.9068 20.0191 22.7409 20.2066C22.575 20.3942 22.35 20.4995 22.1154 20.4995H12.3846V22.672C12.9748 22.9079 13.4723 23.3721 13.7891 23.9825C14.1058 24.5929 14.2215 25.3102 14.1156 26.0077C14.0098 26.7052 13.6892 27.338 13.2105 27.7941C12.7319 28.2503 12.126 28.5004 11.5 28.5004C10.874 28.5004 10.2681 28.2503 9.78945 27.7941C9.31082 27.338 8.99024 26.7052 8.88437 26.0077C8.77851 25.3102 8.89418 24.5929 9.21094 23.9825C9.5277 23.3721 10.0252 22.9079 10.6154 22.672V20.4995H0.884615C0.650001 20.4995 0.424995 20.3942 0.259098 20.2066C0.0932002 20.0191 0 19.7647 0 19.4995C0 19.2343 0.0932002 18.9799 0.259098 18.7924C0.424995 18.6049 0.650001 18.4995 0.884615 18.4995H1.76923V6.49951C1.3 6.49951 0.849991 6.2888 0.518196 5.91372C0.1864 5.53865 0 5.02994 0 4.49951V2.49951C0 1.96908 0.1864 1.46037 0.518196 1.0853C0.849991 0.710225 1.3 0.499512 1.76923 0.499512H21.2308C21.7 0.499512 22.15 0.710225 22.4818 1.0853C22.8136 1.46037 23 1.96908 23 2.49951V4.49951C23 5.02994 22.8136 5.53865 22.4818 5.91372C22.15 6.2888 21.7 6.49951 21.2308 6.49951ZM12.3846 25.4995C12.3846 25.3017 12.3327 25.1084 12.2355 24.9439C12.1383 24.7795 12.0002 24.6513 11.8385 24.5756C11.6769 24.4999 11.499 24.4801 11.3274 24.5187C11.1558 24.5573 10.9982 24.6526 10.8745 24.7924C10.7508 24.9323 10.6665 25.1104 10.6324 25.3044C10.5982 25.4984 10.6158 25.6995 10.6827 25.8822C10.7497 26.0649 10.8631 26.2211 11.0085 26.331C11.154 26.4409 11.325 26.4995 11.5 26.4995C11.7346 26.4995 11.9596 26.3942 12.1255 26.2066C12.2914 26.0191 12.3846 25.7647 12.3846 25.4995ZM1.76923 4.49951H21.2308V2.49951H1.76923V4.49951ZM19.4615 6.49951H3.53846V18.4995H19.4615V6.49951Z'
                      fill='#EBEBE6'
                    />
                  </svg>

                  <div>
                    {windowWidth >= 500 ? (
                      <p>Proyectos</p>
                    ) : (
                      <p style={{ display: "none" }}>Proyectos</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "notificaciones" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("notificaciones")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/notificaciones'>
                  <svg
                    className='icono'
                    width='23'
                    height='27'
                    viewBox='0 0 23 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.5052 6.88661C22.2892 7.00848 22.0378 7.03192 21.806 6.95177C21.5742 6.87163 21.3811 6.69445 21.2692 6.45919C20.3937 4.57394 19.0685 2.98053 17.4328 1.84639C17.3309 1.77631 17.2426 1.68503 17.1731 1.57777C17.1035 1.47051 17.054 1.34936 17.0274 1.22124C17.0007 1.09312 16.9975 0.960541 17.0179 0.831073C17.0383 0.701604 17.0819 0.57778 17.1462 0.466672C17.2105 0.355564 17.2942 0.259346 17.3926 0.183513C17.491 0.107681 17.6022 0.0537174 17.7197 0.0247051C17.8373 -0.00430729 17.9589 -0.00780075 18.0777 0.0144242C18.1965 0.0366491 18.3101 0.0841572 18.412 0.154236C20.3182 1.48463 21.8661 3.34304 22.8973 5.53938C23.0091 5.77473 23.0306 6.04884 22.9571 6.30147C22.8835 6.55409 22.721 6.76456 22.5052 6.88661ZM0.916852 6.99908C1.08489 6.99901 1.24969 6.94861 1.39324 6.85341C1.5368 6.7582 1.6536 6.62183 1.7309 6.45919C2.6064 4.57394 3.9316 2.98053 5.56724 1.84639C5.7731 1.70486 5.91896 1.47999 5.97271 1.22124C6.02646 0.962491 5.98372 0.691065 5.85388 0.466672C5.72403 0.242278 5.51773 0.0832982 5.28035 0.0247051C5.04297 -0.033888 4.79395 0.0127056 4.58809 0.154236C2.68185 1.48463 1.13398 3.34304 0.102805 5.53938C0.0303868 5.69175 -0.00483377 5.86187 0.000533259 6.03337C0.00590029 6.20487 0.0516741 6.37198 0.13345 6.51862C0.215225 6.66525 0.330249 6.78648 0.467453 6.87063C0.604657 6.95477 0.759421 6.99901 0.916852 6.99908ZM22.2541 19.9889C22.4166 20.2927 22.5027 20.6377 22.5038 20.9894C22.5049 21.341 22.4209 21.6867 22.2604 21.9916C22.0998 22.2966 21.8683 22.55 21.5892 22.7263C21.3101 22.9026 20.9933 22.9956 20.6707 22.9958H15.9928C15.7823 24.1259 15.2198 25.1418 14.4007 25.8716C13.5816 26.6013 12.5562 27 11.4983 27C10.4404 27 9.41505 26.6013 8.59595 25.8716C7.77684 25.1418 7.21438 24.1259 7.00386 22.9958H2.32596C2.00357 22.9951 1.68705 22.9018 1.40827 22.7253C1.12949 22.5489 0.898301 22.2954 0.73799 21.9905C0.577679 21.6857 0.493909 21.3401 0.495117 20.9887C0.496325 20.6373 0.582468 20.2925 0.74487 19.9889C1.77791 18.0456 2.32596 15.2824 2.32596 11.9981C2.32596 9.34644 3.29233 6.80342 5.01248 4.92844C6.73263 3.05346 9.06566 2.00011 11.4983 2.00011C13.931 2.00011 16.264 3.05346 17.9842 4.92844C19.7043 6.80342 20.6707 9.34644 20.6707 11.9981C20.6707 15.2811 21.2187 18.0443 22.2541 19.9889ZM14.0918 22.9958H8.90483C9.09486 23.58 9.44624 24.0856 9.91066 24.4432C10.3751 24.8008 10.9297 24.9928 11.4983 24.9928C12.0669 24.9928 12.6216 24.8008 13.086 24.4432C13.5504 24.0856 13.9018 23.58 14.0918 22.9958ZM20.6707 20.9962C19.4508 18.7129 18.8362 15.6861 18.8362 11.9981C18.8362 9.87676 18.0631 7.84235 16.687 6.34236C15.3109 4.84238 13.4444 3.9997 11.4983 3.9997C9.55219 3.9997 7.68577 4.84238 6.30965 6.34236C4.93353 7.84235 4.16043 9.87676 4.16043 11.9981C4.16043 15.6873 3.54359 18.7142 2.32596 20.9962H20.6707Z'
                      fill='#EBEBE6'
                    />
                  </svg>

                  <div>
                    {windowWidth >= 500 ? (
                      <p>Notificaciones</p>
                    ) : (
                      <p style={{ display: "none" }}>Notificaciones</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "calendar" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("calendar")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/calendar'>
                  <svg
                    className='icono'
                    width='23'
                    height='27'
                    viewBox='0 0 23 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21.0833 2.5H18.2083V1.5C18.2083 1.23478 18.1074 0.98043 17.9276 0.792893C17.7479 0.605357 17.5042 0.5 17.25 0.5C16.9958 0.5 16.7521 0.605357 16.5724 0.792893C16.3926 0.98043 16.2917 1.23478 16.2917 1.5V2.5H6.70833V1.5C6.70833 1.23478 6.60737 0.98043 6.42764 0.792893C6.24792 0.605357 6.00417 0.5 5.75 0.5C5.49583 0.5 5.25208 0.605357 5.07236 0.792893C4.89263 0.98043 4.79167 1.23478 4.79167 1.5V2.5H1.91667C1.40833 2.5 0.920823 2.71071 0.561379 3.08579C0.201934 3.46086 0 3.96957 0 4.5V24.5C0 25.0304 0.201934 25.5391 0.561379 25.9142C0.920823 26.2893 1.40833 26.5 1.91667 26.5H21.0833C21.5917 26.5 22.0792 26.2893 22.4386 25.9142C22.7981 25.5391 23 25.0304 23 24.5V4.5C23 3.96957 22.7981 3.46086 22.4386 3.08579C22.0792 2.71071 21.5917 2.5 21.0833 2.5ZM4.79167 4.5V5.5C4.79167 5.76522 4.89263 6.01957 5.07236 6.20711C5.25208 6.39464 5.49583 6.5 5.75 6.5C6.00417 6.5 6.24792 6.39464 6.42764 6.20711C6.60737 6.01957 6.70833 5.76522 6.70833 5.5V4.5H16.2917V5.5C16.2917 5.76522 16.3926 6.01957 16.5724 6.20711C16.7521 6.39464 16.9958 6.5 17.25 6.5C17.5042 6.5 17.7479 6.39464 17.9276 6.20711C18.1074 6.01957 18.2083 5.76522 18.2083 5.5V4.5H21.0833V8.5H1.91667V4.5H4.79167ZM21.0833 24.5H1.91667V10.5H21.0833V24.5ZM9.58333 13.5V21.5C9.58333 21.7652 9.48237 22.0196 9.30264 22.2071C9.12292 22.3946 8.87917 22.5 8.625 22.5C8.37083 22.5 8.12708 22.3946 7.94736 22.2071C7.76763 22.0196 7.66667 21.7652 7.66667 21.5V15.1175L7.13719 15.395C6.90971 15.5137 6.64637 15.5332 6.40509 15.4493C6.16381 15.3654 5.96436 15.1849 5.85062 14.9475C5.73689 14.7101 5.71817 14.4353 5.7986 14.1836C5.87902 13.9318 6.052 13.7237 6.27948 13.605L8.19615 12.605C8.34231 12.5287 8.50474 12.4926 8.66802 12.5003C8.83129 12.5079 8.98997 12.559 9.12899 12.6487C9.268 12.7384 9.38272 12.8637 9.46224 13.0127C9.54177 13.1617 9.58345 13.3295 9.58333 13.5ZM16.6702 17.3062L14.375 20.5H16.2917C16.5458 20.5 16.7896 20.6054 16.9693 20.7929C17.149 20.9804 17.25 21.2348 17.25 21.5C17.25 21.7652 17.149 22.0196 16.9693 22.2071C16.7896 22.3946 16.5458 22.5 16.2917 22.5H12.4583C12.2804 22.5 12.1059 22.4483 11.9545 22.3507C11.8031 22.253 11.6808 22.1133 11.6012 21.9472C11.5216 21.7811 11.4879 21.5952 11.5039 21.4102C11.5199 21.2252 11.5849 21.0486 11.6917 20.9L15.1393 16.1038C15.2177 15.9948 15.2739 15.8703 15.3046 15.7379C15.3352 15.6054 15.3396 15.4678 15.3175 15.3336C15.2953 15.1993 15.2471 15.0712 15.1758 14.957C15.1045 14.8429 15.0116 14.7452 14.9028 14.6699C14.794 14.5945 14.6716 14.5432 14.5431 14.519C14.4146 14.4949 14.2827 14.4983 14.1556 14.5292C14.0284 14.5602 13.9086 14.6179 13.8036 14.6988C13.6986 14.7798 13.6105 14.8823 13.5448 15C13.4838 15.1174 13.4008 15.2208 13.3008 15.3041C13.2008 15.3875 13.0859 15.4491 12.9627 15.4853C12.8395 15.5215 12.7106 15.5316 12.5836 15.5151C12.4567 15.4985 12.3341 15.4555 12.2233 15.3887C12.1125 15.3219 12.0156 15.2327 11.9384 15.1262C11.8612 15.0197 11.8052 14.8981 11.7738 14.7687C11.7423 14.6392 11.736 14.5045 11.7552 14.3725C11.7744 14.2405 11.8188 14.1138 11.8857 14C12.2023 13.4284 12.6907 12.9817 13.2753 12.7291C13.8599 12.4766 14.508 12.4323 15.1192 12.6032C15.7303 12.7741 16.2704 13.1506 16.6556 13.6743C17.0409 14.1981 17.2498 14.8398 17.25 15.5C17.252 16.1522 17.0483 16.7869 16.6702 17.3062Z'
                      fill='#EBEBE6'
                    />
                  </svg>

                  <div>
                    {windowWidth >= 500 ? (
                      <p>Calendario</p>
                    ) : (
                      <p style={{ display: "none" }}>Calendario</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "chat" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("chat")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/chat'>
                  <svg
                    className='icono'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M23.1564 19.3412C23.7357 18.0172 24.0244 16.5563 23.9984 15.081C23.9723 13.6057 23.6322 12.1588 23.0066 10.8617C22.381 9.56452 21.488 8.45478 20.4025 7.6254C19.317 6.79603 18.0705 6.27116 16.7675 6.09475C16.3353 4.96212 15.7059 3.93819 14.9163 3.08328C14.1268 2.22838 13.193 1.55979 12.1701 1.11692C11.1471 0.674042 10.0557 0.465834 8.96004 0.504561C7.86441 0.543289 6.78676 0.828168 5.79057 1.34241C4.79439 1.85666 3.89982 2.58987 3.15957 3.49885C2.41932 4.40783 1.84838 5.47419 1.48036 6.6351C1.11235 7.79602 0.954713 9.028 1.01674 10.2585C1.07878 11.4889 1.35922 12.693 1.84155 13.7997L1.05501 16.896C0.984819 17.173 0.981745 17.4661 1.0461 17.7449C1.11046 18.0237 1.2399 18.2781 1.42105 18.4817C1.60219 18.6854 1.82846 18.8309 2.07642 18.9033C2.32438 18.9757 2.58504 18.9722 2.83141 18.8933L5.58535 18.009C6.41637 18.4677 7.31027 18.7655 8.22942 18.8898C8.66756 20.0439 9.3103 21.0856 10.1184 21.9511C10.9265 22.8167 11.883 23.4881 12.9295 23.9242C13.976 24.3603 15.0906 24.5521 16.2053 24.4879C17.3199 24.4236 18.4112 24.1046 19.4126 23.5504L22.1665 24.4348C22.4129 24.5137 22.6735 24.5171 22.9215 24.4448C23.1695 24.3724 23.3957 24.2269 23.5769 24.0232C23.758 23.8196 23.8875 23.5652 23.9518 23.2864C24.0162 23.0076 24.0131 22.7145 23.9429 22.4375L23.1564 19.3412ZM5.67366 16.0971C5.59731 16.0971 5.52132 16.1088 5.44776 16.1318L2.73592 17.0034L3.51117 13.9544C3.56927 13.7221 3.54421 13.4735 3.44135 13.2617C2.68603 11.7027 2.4557 9.88977 2.79255 8.15528C3.12941 6.42078 4.0109 4.88085 5.27549 3.81765C6.54009 2.75446 8.10309 2.23921 9.67809 2.36632C11.2531 2.49344 12.7346 3.2544 13.8512 4.50977C14.9677 5.76514 15.6446 7.43084 15.7576 9.20165C15.8707 10.9725 15.4124 12.7298 14.4668 14.1516C13.5211 15.5734 12.1515 16.5645 10.6088 16.9432C9.06606 17.3219 7.45363 17.063 6.06693 16.2137C5.94671 16.1381 5.81141 16.098 5.67366 16.0971ZM21.4867 19.4959L22.262 22.5449L19.5502 21.6733C19.3436 21.6079 19.1224 21.6361 18.9341 21.7518C17.4198 22.678 15.6427 22.8989 13.985 22.3669C12.3274 21.8349 10.9217 20.5925 10.0705 18.9071C11.1954 18.7754 12.2838 18.3838 13.2677 17.7568C14.2515 17.1297 15.1095 16.2809 15.7878 15.2634C16.4661 14.246 16.95 13.0819 17.2092 11.8442C17.4685 10.6066 17.4974 9.32204 17.2942 8.07121C18.2786 8.33203 19.1961 8.84475 19.9753 9.56945C20.7546 10.2942 21.3746 11.2113 21.787 12.2494C22.1995 13.2876 22.3933 14.4188 22.3533 15.5549C22.3133 16.6911 22.0407 17.8015 21.5566 18.7998C21.4529 19.0125 21.4278 19.2626 21.4867 19.4959Z'
                      fill='#EBEBE6'
                      stroke='#EBEBE6'
                      strokeWidth='0.4'
                    />
                  </svg>
                  <div>
                    {windowWidth >= 500 ? (
                      <p>Chat</p>
                    ) : (
                      <p style={{ display: "none" }}>Chat</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "profile" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("profile")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/profile'>
                  <svg
                    className='icono'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541606 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C24.9965 9.18587 23.6784 6.00848 21.335 3.66503C18.9915 1.32158 15.8141 0.00349978 12.5 0ZM6.01924 20.8534C6.71483 19.7655 7.67309 18.8702 8.80568 18.2501C9.93827 17.6299 11.2087 17.3049 12.5 17.3049C13.7913 17.3049 15.0617 17.6299 16.1943 18.2501C17.3269 18.8702 18.2852 19.7655 18.9808 20.8534C17.1278 22.2945 14.8474 23.0768 12.5 23.0768C10.1526 23.0768 7.8722 22.2945 6.01924 20.8534ZM8.65385 11.5385C8.65385 10.7778 8.87942 10.0341 9.30204 9.40165C9.72466 8.76915 10.3254 8.27618 11.0281 7.98508C11.7309 7.69397 12.5043 7.6178 13.2503 7.76621C13.9964 7.91461 14.6817 8.28092 15.2196 8.81882C15.7575 9.35671 16.1238 10.042 16.2723 10.7881C16.4207 11.5342 16.3445 12.3075 16.0534 13.0103C15.7623 13.7131 15.2693 14.3138 14.6368 14.7364C14.0043 15.159 13.2607 15.3846 12.5 15.3846C11.4799 15.3846 10.5017 14.9794 9.78036 14.2581C9.05907 13.5368 8.65385 12.5585 8.65385 11.5385ZM20.4038 19.5204C19.3315 17.9664 17.8235 16.7642 16.0697 16.0649C17.0118 15.3229 17.6992 14.3057 18.0365 13.1549C18.3737 12.0041 18.3439 10.7768 17.9512 9.64368C17.5586 8.51057 16.8226 7.52799 15.8456 6.83256C14.8686 6.13713 13.6992 5.76343 12.5 5.76343C11.3008 5.76343 10.1314 6.13713 9.1544 6.83256C8.17743 7.52799 7.44144 8.51057 7.04879 9.64368C6.65614 10.7768 6.62634 12.0041 6.96355 13.1549C7.30076 14.3057 7.98821 15.3229 8.93029 16.0649C7.17647 16.7642 5.66855 17.9664 4.59616 19.5204C3.24107 17.9966 2.35538 16.1135 2.04573 14.098C1.73609 12.0824 2.01569 10.0203 2.85087 8.15997C3.68605 6.29964 5.0412 4.7204 6.75313 3.61242C8.46507 2.50444 10.4608 1.91496 12.5 1.91496C14.5392 1.91496 16.5349 2.50444 18.2469 3.61242C19.9588 4.7204 21.314 6.29964 22.1491 8.15997C22.9843 10.0203 23.2639 12.0824 22.9543 14.098C22.6446 16.1135 21.7589 17.9966 20.4038 19.5204Z'
                      fill='#EBEBE6'
                    />
                  </svg>

                  <div>
                    {windowWidth >= 500 ? (
                      <p>Perfil</p>
                    ) : (
                      <p style={{ display: "none" }}>Perfil</p>
                    )}
                  </div>
                </Link>
              </li>

              <li
                className={activeItem === "modelo" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("modelo")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  /*                   className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'
                   */ onClick={handleLogout}
                >
                  Salir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
