//Importes

const express = require('express')
var EmpresaControlador = require('../controllers/EmpresaControlador')

//Inicializar Router

const EmpresasRutas = express.Router()

//Rutas

EmpresasRutas.post('/register', EmpresaControlador.agregarEmpresa)
EmpresasRutas.post('/update/:id', EmpresaControlador.modificarEstado)
EmpresasRutas.delete('/delete/:id', EmpresaControlador.borrarEmpresa)
EmpresasRutas.get('/all', EmpresaControlador.obtenerEmpresas)
EmpresasRutas.get('/id/:id', EmpresaControlador.obtenerEmpresa)


//Exportar

module.exports = EmpresasRutas