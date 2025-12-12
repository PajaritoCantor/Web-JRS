import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header id="header" role="banner">
          <div class="container">
            <img src="./src/assets/original.jpeg" alt="Logo Jerónimo" className="nav-brand"/>
              <div class={`nav-menu ${menuOpen ? "show" : ""}`}>
                <nav class="menu-item">
                  <a href="#" onClick={e => e.preventDefault()}>Biografía</a>
                  <ul class="dropdown-menu">
                    <li><a href="/">Acerca de</a></li>
                  </ul>
                </nav>
                <li class="menu-item">
                  <a href="#" onClick={e => e.preventDefault()}>Publicaciones</a>
                  <ul class="dropdown-menu">
                    <li><a href="/">Libros</a></li>
                    <li><a href="/">Artículos Académicos</a></li>
                    <li><a href="/">Ensayos / Columnas</a></li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="#" onClick={e => e.preventDefault()}>Eventos</a>
                </li>
                <li class="menu-item">
                  <a href="#" onClick={e => e.preventDefault()}>Medios</a>
                  <ul class="dropdown-menu">
                    <li><a href="/">Entrevistas</a></li>
                    <li><a href="/">Artículos de prensa</a></li>
                    <li><a href="/">Audio</a></li>
                    <li><a href="/">Visual</a></li>
                  </ul>
                </li>
              </div>
            <ul class={`nav-menu-right ${menuOpen ? "show" : ""}`}>
              <li class="social-icons">
                <a class="icon-button" href="https://facebook.com/tupagina" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H8.9v-2.9h1.54V9.4c0-1.52.9-2.36 2.28-2.36.66 0 1.35.12 1.35.12v1.48h-.76c-.75 0-.98.47-.98.95v1.15h1.67l-.27 2.9h-1.4v7.03C18.34 21.2 22 17.08 22 12.07z"/>
                  </svg>
                </a>
                <a class="icon-button" href="https://twitter.com/tuperfil" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M23 4.5c-.7.3-1.45.5-2.24.6a3.9 3.9 0 0 0-6.6 3.55A11.1 11.1 0 0 1 3.2 3.9a3.9 3.9 0 0 0 1.2 5.2c-.6 0-1.1-.18-1.6-.45v.05c0 1.9 1.35 3.5 3.1 3.88-.55.15-1.12.2-1.7.07.48 1.5 1.9 2.6 3.6 2.64A7.9 7.9 0 0 1 1.8 19.6 11.2 11.2 0 0 0 6.1 21c7.55 0 11.68-6.45 11.68-12.04 0-.18-.01-.37-.02-.55A8.2 8.2 0 0 0 23 4.5z"/>
                  </svg>
                </a>
                <a class="icon-button" href="https://instagram.com/tuperfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.5-2.3a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 10.5A1.5 1.5 0 1 1 10.5 12 1.5 1.5 0 0 1 12 10.5z"/>
                  </svg>
                </a>          
                <button class="icon-button" aria-label="Buscar">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </button>
              </li>
            </ul>  
            {/* Botón menú responsive */}
            <div className="menu-btn" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
    </header>
  );
};

export default Header;