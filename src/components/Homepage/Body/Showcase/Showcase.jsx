import React from 'react';
import './Showcase.css';

const Body = () => {
    return (
      <main>
        <section className="showcase">
          <div className="showcase-content">
            <div className="quote-container">
              <a href="/ruta-a-la-pagina-deseada" className="slide-title"> {/* Envuelve el texto en un <a> */}
                Jerónimo Ríos Sierra es Doctor en Ciencias Políticas (premio extraordinario de doctorado) de la Universidad Complutense de Madrid y Doctor en Humanidades de la Universidad Rey Juan Carlos... 
                <div className="btn-container">
                  <a href="/ruta-a-la-pagina-deseada" className="btn">
                    Leer más <i className="fas fa fa-angle-double-right"></i>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Body;