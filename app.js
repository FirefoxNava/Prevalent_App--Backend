'use strict'
//Configuración de Express Js

//Importes

var express = require('express')
var bodyParser = require('body-parser')

//Ejecución Express Js

var app = express()

//Middleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Carga de archivos de Rutas

var RutasEmpresa = require('./src/routes/EmpresaRutas')

//Body-parser -> petición JSON

app.use(express.json())


//CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, API_KEY');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Expose-Headers', 'API_KEY')
    next();
});

//Inyección de Rutas a Express Js

app.use('/empresas', RutasEmpresa)

//Exportar App.js

module.exports = app;