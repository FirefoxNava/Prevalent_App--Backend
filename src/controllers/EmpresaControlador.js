//Importes

const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


const EmpresaControlador = {

    //Agregar una empresa

    agregarEmpresa : async(req, res) => {
        const {id, nombre, razonSocial, numeroEmpleados, logo, estado} = req.body

        const result = await prisma.empresas.create({
            data : {
                id : id,
                nombre : nombre,
                razonSocial : razonSocial,
                numeroEmpleados : numeroEmpleados,
                logo : logo,
                estado : estado
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
            }
        })

        if(result) {
            return res.status(201).send({
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
            return res.status(201).send({
                status : 'success',
                empresas : result
            })
        }
    },

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
    }
}

//Exportar Controlador

module.exports = EmpresaControlador