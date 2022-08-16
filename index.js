//Librerias y Modulos

var app = require('./app')
const path = require("path");

//Rutas

const filePath = path.join(__dirname, 'uploads');

//Importe e Inicialización DOTENV
require('dotenv').config()

//Conexión

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})

exports.path = filePath