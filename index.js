const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>WebNewAge</h1><p>¡El servidor está funcionando correctamente!</p>');
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
  console.log("¡El entorno de desarrollo WebNewAge está funcionando!");
});