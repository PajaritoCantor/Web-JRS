import React from 'react';
import './Eventos.css';
import eventImage from '../../../../assets/1000x1000.jpg';

const Eventos = () => {
  return (
    <section className="events-container">
      <div className="events-container">
        <h2 className="title-line">
          <span className="ttl">Eventos</span>
          <span className="elm_line"></span>
        </h2>
        <section className="events">
          <div className="event-card-new">
            <div className="event-image">
              <img src={eventImage} alt="Evento" />
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">MAR</span>
              </div>
            </div>
            <div className="event-content">
              <h3>Conferencia Internacional</h3>
              <div className="event-details">
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> Lima, Perú
                </p>
                <p className="event-time">
                  <i className="far fa-clock"></i> 18:00 - 20:00
                </p>
              </div>
              <p className="event-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic temporibus nihil sit cumque quo minus itaque voluptatibus velit nam voluptates tempore quam soluta.
              </p>
              <a href="#" className="event-btn">
                Más información <i className="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Eventos;
