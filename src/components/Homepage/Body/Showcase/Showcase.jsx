import React from 'react';
import fondoImage from '../../../../assets/1000x1000.jpg';

const Body = () => {
  return (
    <main>
      <section className="showcase">
        <img src={fondoImage} alt="Fondo Jerónimo Ríos" className="showcase-bg" />
        <div className="showcase-content">
          <div className="quote-container">
            <a href="/ruta-a-la-pagina-deseada" className="slide-title">
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