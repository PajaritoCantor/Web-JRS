import React from 'react';
import './Actualidad.css';
import placeholderImage from '../../../../assets/1000x1000.jpg';
import libroImage from '../../../../assets/Brevehistoriadelconflicto.jpg';
import articuloImage from '../../../../assets/TerrorismodeEstadoyGruposArmadosEnPeruArticle.jpeg';

const Actualidad = () => {
    return (
        <>
            <h2 className="title-line">
                <span className="ttl">Actualidad</span>
                <span className="elm_line"></span>
            </h2>
            <section className="cards">
                <a href="#" className="card-link">
                    <article>
                        <img src={placeholderImage} alt="Bio" />
                        <h3>Actualidad 1.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </article>
                </a>
                <a href="#" className="card-link">
                    <article>
                        <img src={libroImage} alt="Libros" />
                        <h3>Actualidad 2.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </article>
                </a>
                <a href="#" className="card-link">
                    <article>
                        <img src={articuloImage} alt="Articulos" />
                        <h3>Actualidad 3.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </article>
                </a>
                <a href="#" className="card-link">
                    <article>
                        <img src={placeholderImage} alt="Videos" />
                        <h3>Actualidad 4.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </article>
                </a>
            </section>
        </>
    );
};

export default Actualidad;