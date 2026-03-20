require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Permite conexiones desde el frontend (puerto 4321/4322)
app.use(express.json());

// Endpoint de salud
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

// Endpoint: Artículos
app.get('/api/articles', (req, res) => {
    const sql = "SELECT * FROM articles ORDER BY year DESC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "data": rows });
    });
});

// Endpoint: Libros
app.get('/api/books', (req, res) => {
    const sql = "SELECT * FROM books";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "data": rows });
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Backend corriendo en http://localhost:${PORT}`);
});