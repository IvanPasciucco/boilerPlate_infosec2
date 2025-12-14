const express = require('express');
const app = express();

// 1. Importar Helmet
const helmet = require('helmet');

// 2. Usar hidePoweredBy (EL NUEVO REQUISITO)
app.use(helmet.hidePoweredBy());

module.exports = app;

// Configuración de estáticos
app.use(express.static('public'));
app.disable('strict-transport-security');

// Rutas
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Listener
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});