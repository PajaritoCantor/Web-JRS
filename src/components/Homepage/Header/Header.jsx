import React, { useState } from 'react';
import './Header.css';
import JeronimoImage from '../../../assets/original.jpeg'; // Importar la imagen

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" role="banner">
      <div class="container">
      <div id="logo">
        <a href={JeronimoImage} alt= "Jerónimo Foto Logo"></a> 
      </div>
      <div id="menu">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar icon-bar-two"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
            <li id="menu-item-1349" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1349 dropdown">
              <a title="Acerca de" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Biografía
                <span class="caret"></span>
              </a>
               <ul role="menu" class=" dropdown-menu">
                <li id="menu-item-1350" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1350">
                  <a title="Acerca de" href="http://localhost:5173/">Acerca de</a>
                </li>
               </ul>
            </li>
            <li id="menu-item-1387" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item 1387 dropdown">
              <a title="Libros" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Libros
                <span class="caret"></span>
              </a>
              <ul role="menu" class=" dropdown-menu">
                <li id="menu-item-1388" class="menu-item menu-item-type-post_type menu-item-object-book menu-item-1388">
                  <a title="Tupamaros" href="http://localhost:5173/">Tupamaros</a>
                </li>
                <li id="menu-item-1389" class="menu-item menu-item-type-post_type menu-item-object-book-menu-item-1389">
                  <a title="Enclaves de la Violencia en Colombia" href="http://localhost:5173/">Enclaves de la Violencia en Colombia</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-14865" class="ppr-new-window menu-item menu-item-type-post_type menu-item-object-page menu-item-14865">
              <a title="Eventos" target="_blank" href="https://www.europapress.es/internacional/noticia-colombia-mano-obra-mercenaria-opera-guerras-medio-mundo-20250621101150.html">Eventos</a>
            </li>
            <li id="menu-item-1409" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1409 dropdown">
              <a title="Medios" href="https://www.eldiario.es/euskadi/victimas-gal-exigen-derechos-investigacion-eta-no-exime-hayan-sufrido-terrorismo_1_12320897.html" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Medios 
              <span class="caret"></span>
              </a>
              <ul role="menu" class=" dropdown-menu">
                <li id="menu-item-1410" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1410">
                  <a title="Artículos" href="https://www.eldiario.es/euskadi/victimas-gal-exigen-derechos-investigacion-eta-no-exime-hayan-sufrido-terrorismo_1_12320897.html">Artículos</a>
                </li>
                <li id="menu-item-1411" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1411">
                  <a title="Video" href="https://www.rtve.es/play/audios/cinco-continentes/cinco-continentes-especial-terrorismo-estado-america-latina/16488372/">Audio</a>
                </li>
                <li id="menu-item-1411" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1411">
                  <a title="Video" href="https://www.rtve.es/play/audios/cinco-continentes/cinco-continentes-especial-terrorismo-estado-america-latina/16488372/">Video</a>
                </li>
              </ul>
            </li>
          </div>
        </nav>
      </div>
      <div id="header-right">
      </div>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;