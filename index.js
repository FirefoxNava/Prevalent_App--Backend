//Librerias y Modulos

var app = require('./app')

//Importe e Inicialización DOTENV
require('dotenv').config()

//Conexión

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})