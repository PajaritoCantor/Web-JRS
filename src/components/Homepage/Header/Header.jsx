import React, { useState } from 'react';
import './Header.css';
import JeronimoImage from '../../../assets/original.jpeg'; // Importar la imagen

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* Botón de menú */}
      <button className="menu-btn" aria-label="Menú" onClick={toggleMenu}>
        <i className="fas fa-bars fa-2x"></i>
      </button>
      <div className="container-header">
        <nav className="nav-main">
          {/* Contenedor de la izquierda */}
          <img src={JeronimoImage} alt="Jeronimo Foto1" className="nav-brand" />
          <ul className={`nav-left ${menuOpen ? 'show' : ''}`}>
            <li><a href="#">Biografía</a></li>
            <li><a href="#">Libros</a></li>
            <li><a href="#">Artículos</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Eventos</a></li>
          </ul>
          {/* Contenedor de los íconos a la derecha */}
          <ul className="nav-right">
            <li>
              <a href="https://chatgpt.com/c/67d7eba3-f334-800e-b891-82505ef43f44" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" aria-label="Buscar"><i className="fas fa-search"></i></a></li>
          </ul>
        </nav>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;