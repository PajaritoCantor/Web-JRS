// src/header/Header.jsx
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="container">
      <nav className="nav-main">
        <img 
          src="./src/assets/original.jpeg" 
          alt="Logo Jerónimo" 
          className="nav-brand"
        />

        {/* Menú principal */}
        <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <li className="menu-item">
            <a href="#" onClick={e => e.preventDefault()}>Biografía</a>
            <ul className="dropdown-menu">
              <li><a href="/">Acerca de</a></li>
            </ul>
          </li>

          <li className="menu-item">
            <a href="#" onClick={e => e.preventDefault()}>Publicaciones</a>
            <ul className="dropdown-menu">
              <li><a href="/">Libros</a></li>
              <li><a href="/">Artículos Académicos</a></li>
              <li><a href="/">Ensayos / Columnas</a></li>
            </ul>
          </li>

          <li className="menu-item">
            <a href="#" onClick={e => e.preventDefault()}>Eventos</a>
          </li>

          <li className="menu-item">
            <a href="#" onClick={e => e.preventDefault()}>Medios</a>
            <ul className="dropdown-menu">
              <li><a href="/">Entrevistas</a></li>
              <li><a href="/">Artículos de prensa</a></li>
              <li><a href="/">Audio</a></li>
              <li><a href="/">Visual</a></li>
            </ul>
          </li>
        </ul>

        {/* Icono de búsqueda */}
        <ul className="nav-menu-right">
          <li className="menu-item">
            <a href="#" onClick={e => e.preventDefault()}>
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>

        {/* Botón menú responsive */}
        <div className="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
