//Importes

const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const app = require('../../index')

const EmpresaControlador = {

    //Agregar una empresa

    agregarEmpresa : async(req, res) => {
        const {id, nombre, razonSocial, numeroEmpleados, logo, estado, nit, archivos} = req.body

        const result = await prisma.empresas.create({
            data : {
                id : id,
                nombre : nombre,
                razonSocial : razonSocial,
                numeroEmpleados : numeroEmpleados,
                logo : logo,
                estado : estado,
                nit : nit,
                archivos : archivos
            }
        })

        if(result) {
            return res.status(201).send({
                status : 'success'
            })
        }
    },

    //Modificar Estado

    modificarEstado : async(req, res) => {
        const {id} = req.params
        const {estado} = req.body

        const result = await prisma.empresas.update({
            where : {id : Number(id)},
            data : {
                estado : estado
            },
            select: {
                estado : true
            }
        })

        if(result) {
            return res.status(201).send({
                empresa: result,
                status : 'success'
            })
        }
    },

    //Borrar
    borrarEmpresa : async(req, res) => {
        const {id} = req.params

        const result = await prisma.empresas.delete({
            where: {id: Number(id)}
        })

        if(result) {
            return res.status(200).send({
                status : 'success'
            })
        }
    },

    //obtenerEmpresas
    obtenerEmpresas : async(req, res) => {
        const result = await prisma.empresas.findMany()

        if(result){
            return res.status(200).send({
                status : 'success',
                empresas : result
            })
        }
    },

    //obtenerEmpresa
    obtenerEmpresa : async(req, res) => {
        const {id} = req.params

        const result = await prisma.empresas.findMany({
            where: {id: Number(id)}
        })

        if(result){
            return res.status(201).send({
                status : 'success',
                empresas : result
            })
        }
    },

    //descargarArchivo
    descargarArchivo : (req,res) => {
        const {id} = req.params

        res.set()

        res.download(app.path+'\\'+id, id, (err) => {
            if(err){
                return res.status(400).send({
                    status : 'error'
                })
            }
        })
    }
}

//Exportar Controlador

module.exports = EmpresaControlador