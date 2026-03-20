const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

function isSafeHttpUrl(value) {
    if (typeof value !== 'string' || value.trim() === '') return false;

    try {
        const parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (error) {
        return false;
    }
}

// Configuración de Seguridad y Middlewares
app.use(helmet()); 
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Endpoints básicos de lectura
app.get('/api/articles', (req, res) => {
    db.all('SELECT * FROM articles', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const data = rows
            .filter((row) => isSafeHttpUrl(row.url))
            .map((row) => ({
                id: row.id,
                titulo: row.title,
                revista: row.journal,
                anio: row.year,
                url_externa: row.url,
                descripcion_corta: row.descripcion_corta || ''
            }));

        res.json({ data });
    });
});

app.get('/api/books', (req, res) => {
    db.all('SELECT * FROM books', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
});

app.get('/api/media', (req, res) => {
    db.all('SELECT * FROM media', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
});

// Health check para Docker
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en el puerto ${PORT}`);
});
