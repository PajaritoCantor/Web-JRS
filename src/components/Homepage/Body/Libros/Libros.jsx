import React from 'react';
import './Libros.css';
import placeholderImage from '../../../../assets/1000x1000.jpg';
import libroImage from '../../../../assets/Brevehistoriadelconflicto.jpg';
import articuloImage from '../../../../assets/TerrorismodeEstadoyGruposArmadosEnPeruArticle.jpeg';
import eventImage from '../../../../assets/1000x1000.jpg';

const Libros = () => {
    return (
        <section className="books-main-section">
            <div className="books-container">
                <h2 className="title-line">
                    <span className="ttl">Libros</span>
                    <span className="elm_line"></span>
                </h2>
                <section className="books-section">
                    <a href="/libro1" className="book-link">
                        <div className="book">
                            <img src={articuloImage} alt="Libro 1" />
                            <h3>Libro 1</h3>
                        </div>
                    </a>
                    <a href="/libro2" className="book-link">
                        <div className="book">
                            <img src={libroImage} alt="Libro 2" />
                            <h3>Libro 2</h3>
                        </div>
                    </a>
                    <a href="/libro3" className="book-link">
                        <div className="book">
                            <img src={placeholderImage} alt="Libro 3" />
                            <h3>Libro 3</h3>
                        </div>
                    </a>
                    <a href="/libro4" className="book-link">
                        <div className="book">
                            <img src={eventImage} alt="Libro 4" />
                            <h3>Libro 4</h3>
                        </div>
                    </a>
                    <a href="/libro5" className="book-link">
                        <div className="book">
                            <img src={articuloImage} alt="Libro 5" />
                            <h3>Libro 5</h3>
                        </div>
                    </a>
                </section>
            </div>
        </section>
    );
};

export default Libros;
