import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
import './index.css'; // Asegúrate de que este archivo existe y está bien importado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);