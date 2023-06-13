/* 
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartPie, faCalendarAlt, faFileAlt, faBell, faTasks, faClipboardList, faGlobe, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/SideBar.css";
 */
/* function SideBar() { */
/* 
function UserView() {
  return <div>Hola, usuario


  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const links = [
    { icon: faUser, label: "Profile", href: "/profile", restricted: false },
    { icon: faChartPie, label: "Dashboard", href: "/dashboard", restricted: true },
    { icon: faCalendarAlt, label: "Agenda/Calendario", href: "/calendar", restricted: true },
    { icon: faFileAlt, label: "Informes y Articulos", href: "/informes", restricted: true },
    { icon: faBell, label: "Notifications", href: "/notifications", restricted: true },
    { icon: faTasks, label: "Programas", href: "/tables", restricted: true },
    { icon: faClipboardList, label: "Plan de acciones", href: "/typography", restricted: true },
    { icon: faGlobe, label: "Retos", href: "/rtl", restricted: true },
    { icon: faComments, label: "Chat", href: "/upgrade", restricted: true }
  ];
  const renderLinks = () => {
    if (isLoggedIn) {
      return links.map((link, index) => {
        if (isAdmin) {
          return (
            <li key={index} className={index === 0 ? "active" : ""}>
              <Link to={link.href}>
                <FontAwesomeIcon icon={link.icon} />
                <p>{link.label}</p>
              </Link>
            </li>
          );
        } else if (index < 4) {
          return (
            <li key={index} className={index === 0 ? "active" : ""}>
              <Link to={link.href}>
                <FontAwesomeIcon icon={link.icon} />
                <p>{link.label}</p>
              </Link>
            </li>
          );
        }
        return null;
      });
    } else {
      const userLinks = links.slice(0, 4);
      return userLinks.map((link, index) => (
        <li key={index} className={index === 0 ? "active" : ""}>
          <Link to={link.href}>
            <FontAwesomeIcon icon={link.icon} />
            <p>{link.label}</p>
          </Link>
        </li>
      ));
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <Link to="/" className="simple-text logo-mini">
            Soledaptive
          </Link>
        </div>
        <ul className="nav">{renderLinks()}</ul>
      </div>
    </div>
  );
}
export default SideBar;
 */
