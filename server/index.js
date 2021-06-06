// VARIABLES GLOBALES ===============================================================
var express = require('express');
var app = express(); //Crear nuestra aplicación w / express
var port = process.env.PORT || 3001; //Establecer el puerto
var http = require('http');
var Services = require('./services');
var cors = require('cors');

// CONFIGURACIÓN ===============================================================
var server = http.createServer(app);


app.use(express.static('./')); //Establecer la ubicación de los archivos estáticos
app.use(cors());

app.get('/api/items', function (req, res) {
  Services.search(req.query.q).then((data) => {
    res.send(data);
  });
});

app.get('/api/items/:id', function (req, res) {
  Services.getProduct(req.params.id)
  .then((data) => {
    res.send(data);
  });
});


// Listen (inicia la aplicación con el nodo server.js) ======================================
server.listen(port, "127.0.0.1", function () {
  var addr = server.address();
  console.log("Soporte server listening at", addr.address + ":" + addr.port);
});
