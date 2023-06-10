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

    // Agregar el event listener al cargar el componente
    window.addEventListener("resize", handleResize);

    // Remover el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <a href='./map.html'>
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
                </a>
              </li>

              <li
                className={activeItem === "notificaciones" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("notificaciones")}
                onMouseLeave={handleMouseLeave}
              >
                <a href='./notifications.html'>
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
                </a>
              </li>

              <li
                className={activeItem === "planaccion" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("planaccion")}
                onMouseLeave={handleMouseLeave}
              >
                <a href='./tables.html'>
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
                </a>
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
                <a href='./upgrade.html'>
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
                </a>
              </li>

              <li
                className={activeItem === "settings" ? "active" : ""}
                onMouseEnter={() => handleMouseEnter("settings")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/#'>
                  <svg
                    className='icono'
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.501 7.19331C11.5263 7.19331 10.5734 7.50454 9.763 8.08763C8.95256 8.67073 8.3209 9.49951 7.94789 10.4692C7.57489 11.4388 7.47729 12.5058 7.66745 13.5352C7.85761 14.5646 8.32697 15.5101 9.0162 16.2522C9.70542 16.9944 10.5835 17.4998 11.5395 17.7045C12.4955 17.9093 13.4864 17.8042 14.3869 17.4026C15.2874 17.0009 16.0571 16.3208 16.5986 15.4481C17.1402 14.5754 17.4292 13.5495 17.4292 12.4999C17.4278 11.093 16.9082 9.74406 15.9842 8.74919C15.0603 7.75433 13.8076 7.19477 12.501 7.19331ZM12.501 16.0376C11.8512 16.0376 11.216 15.8302 10.6757 15.4414C10.1354 15.0527 9.71426 14.5002 9.46559 13.8537C9.21692 13.2073 9.15185 12.496 9.27862 11.8097C9.40539 11.1235 9.71831 10.4931 10.1778 9.99835C10.6373 9.50359 11.2227 9.16666 11.86 9.03015C12.4973 8.89365 13.1579 8.96371 13.7583 9.23147C14.3586 9.49923 14.8717 9.95267 15.2327 10.5345C15.5938 11.1162 15.7865 11.8002 15.7865 12.4999C15.7865 13.4382 15.4403 14.338 14.8242 15.0015C14.208 15.6649 13.3723 16.0376 12.501 16.0376ZM23.7886 10.2015C23.7658 10.0769 23.7183 9.95916 23.6493 9.85615C23.5804 9.75314 23.4917 9.66731 23.3893 9.6045L20.3266 7.72508L20.3143 4.00825C20.3139 3.88024 20.2877 3.75385 20.2375 3.6378C20.1874 3.52175 20.1144 3.4188 20.0237 3.33608C18.9127 2.32418 17.6333 1.54871 16.2536 1.05093C16.1449 1.01133 16.0298 0.99667 15.9156 1.0079C15.8013 1.01914 15.6905 1.05601 15.5903 1.11615L12.501 2.97567L9.40852 1.11284C9.30826 1.05236 9.19734 1.0152 9.08291 1.00378C8.96848 0.992353 8.85311 1.00691 8.74423 1.0465C7.36551 1.54793 6.08761 2.32635 4.97825 3.3405C4.88767 3.4231 4.81478 3.52587 4.76462 3.64172C4.71446 3.75757 4.68822 3.88374 4.6877 4.01156L4.67229 7.73171L1.60961 9.61113C1.50715 9.67394 1.41844 9.75977 1.34953 9.86278C1.28061 9.9658 1.2331 10.0836 1.21022 10.2081C0.929926 11.7248 0.929926 13.2861 1.21022 14.8027C1.2331 14.9273 1.28061 15.0451 1.34953 15.1481C1.41844 15.2511 1.50715 15.3369 1.60961 15.3997L4.67229 17.2792L4.68461 20.996C4.68499 21.124 4.71116 21.2504 4.76133 21.3664C4.81149 21.4825 4.88445 21.5854 4.97517 21.6682C6.08615 22.6801 7.36552 23.4555 8.74526 23.9533C8.85391 23.9929 8.96907 24.0076 9.0833 23.9963C9.19754 23.9851 9.30832 23.9482 9.40852 23.8881L12.501 22.0241L15.5934 23.887C15.7158 23.9604 15.8538 23.9985 15.9938 23.9975C16.0836 23.9975 16.1727 23.9818 16.2577 23.9511C17.6363 23.4503 18.9142 22.6727 20.0237 21.6593C20.1143 21.5767 20.1872 21.4739 20.2373 21.3581C20.2875 21.2423 20.3137 21.1161 20.3143 20.9883L20.3297 17.2681L23.3923 15.3887C23.4948 15.3259 23.5835 15.24 23.6524 15.137C23.7213 15.034 23.7688 14.9162 23.7917 14.7917C24.0705 13.2762 24.0694 11.7165 23.7886 10.2015ZM22.2486 14.0609L19.3153 15.8574C19.1867 15.9361 19.0803 16.0507 19.0072 16.1891C18.9477 16.2997 18.8851 16.4168 18.8214 16.5274C18.7399 16.6668 18.6965 16.8281 18.6962 16.9928L18.6808 20.5582C17.8923 21.2249 17.0139 21.758 16.076 22.1391L13.117 20.3636C12.9942 20.2904 12.8559 20.2524 12.7156 20.2531H12.696C12.5718 20.2531 12.4466 20.2531 12.3223 20.2531C12.1754 20.2491 12.0301 20.2873 11.9014 20.3636L8.94034 22.1435C8.00039 21.7654 7.11959 21.2349 6.32838 20.5704L6.31709 17.0105C6.31658 16.8455 6.27319 16.6839 6.19183 16.544C6.12817 16.4334 6.06554 16.3229 6.00702 16.2057C5.93446 16.0652 5.82805 15.9483 5.69901 15.8674L2.76261 14.0665C2.61066 13.0315 2.61066 11.9772 2.76261 10.9422L5.69079 9.14238C5.81931 9.06369 5.92573 8.94911 5.99881 8.81072C6.05836 8.70016 6.12099 8.58298 6.18464 8.47242C6.26612 8.33301 6.30953 8.17172 6.3099 8.00699L6.3253 4.44162C7.11374 3.77492 7.99213 3.2418 8.93007 2.8607L11.8849 4.63619C12.0135 4.71295 12.1589 4.75113 12.3059 4.74675C12.4301 4.74675 12.5554 4.74675 12.6796 4.74675C12.8266 4.7507 12.9718 4.71255 13.1006 4.63619L16.0616 2.85627C17.0016 3.23445 17.8824 3.76496 18.6736 4.42946L18.6849 7.9893C18.6854 8.15435 18.7288 8.31596 18.8101 8.45584C18.8738 8.56639 18.9364 8.67695 18.9949 8.79414C19.0675 8.93466 19.1739 9.05153 19.3029 9.13243L22.2393 10.9334C22.3933 11.9691 22.395 13.0246 22.2445 14.0609H22.2486Z'
                      fill='#EBEBE6'
                      stroke='#EBEBE6'
                      strokeWidth='0.3'
                    />
                  </svg>
                  <div>
                    {windowWidth >= 500 ? (
                      <p>Settings</p>
                    ) : (
                      <p style={{ display: "none" }}>Settings</p>
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
                      <p>Profile</p>
                    ) : (
                      <p style={{ display: "none" }}>Profile</p>
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
                  className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'
                  onClick={handleLogout}
                >
                  logout
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
