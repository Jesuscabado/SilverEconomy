import React from "react";
import "../css/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChartPie,
  faGlobe,
  faBell,
  faCalendarAlt,
  faFileAlt,
  faTasks,
  faClipboardList,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div>
        <div className='sidebar'>
          <div className='sidebar-wrapper'>
            <div className='logo'>
              <a href='#' className='simple-text logo-mini'>
                Soledaptive
              </a>
            </div>
            <ul className='nav'>
              <li>
                <Link to='/profile'>
                  <FontAwesomeIcon icon={faUser} /> <p>Profile</p>
                </Link>
              </li>
              <li className='active '>
                <a href='./dashboard.html'>
                  <FontAwesomeIcon icon={faChartPie} /> <p>Dashboard</p>
                </a>
              </li>
              <li>
                <Link to='/calendar'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p>Agenda/Calendario</p>
                </Link>
              </li>
              <li>
                <a href='./map.html'>
                  <FontAwesomeIcon icon={faFileAlt} />

                  <p>Informes y Articulos</p>
                </a>
              </li>
              <li>
                <a href='./notifications.html'>
                  <FontAwesomeIcon icon={faBell} />
                  <p>Notifications</p>
                </a>
              </li>

              <li>
                <a href='./tables.html'>
                  <FontAwesomeIcon icon={faTasks} />
                  <p>Programas</p>
                </a>
              </li>
              <li>
                <a href='./typography.html'>
                  <FontAwesomeIcon icon={faClipboardList} />
                  <p>Plan de acciones</p>
                </a>
              </li>
              <li>
                <a href='./rtl.html'>
                  <FontAwesomeIcon icon={faGlobe} />

                  <p>Retos</p>
                </a>
              </li>
              <li className='active-pro'>
                <a href='./upgrade.html'>
                  <FontAwesomeIcon icon={faComments} />
                  <p>Chat</p>
                </a>
              </li>
              <li className='active-pro'>
                <Link to='/BoxIniciarSesin'>
                  <p>Chat</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
