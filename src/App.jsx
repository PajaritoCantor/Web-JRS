import React from 'react';
import Showcase from './components/Homepage/Body/Showcase/Showcase';
import Actualidad from './components/Homepage/Body/Actualidad/Actualidad';
import Buttons from './components/Homepage/Body/Buttons/Buttons';
import Eventos from './components/Homepage/Body/Eventos/Eventos';
import Libros from './components/Homepage/Body/Libros/Libros';
import Footer from './components/Homepage/Footer/Footer';
import Header from './components/Homepage/Header/Header';
import './App.css'; // Asegúrate de que la ruta sea correcta

const App = () => { // Cambiado el nombre a App
    return (
        <main>
            <Header />
            <Showcase />
            <Actualidad />
            <Buttons text={"Videos"} url={"#"} />
            <Eventos />
            <Buttons text={"Eventos"} url={"#"} />
            <Libros />
            <Footer />
        </main>
    );
};

export default App;