import { Router } from "express";
import CustomError from "../services/errors/custom-errors.js";
import { generarInfoError } from "../services/errors/info.js";
import { EErrors } from "../services/errors/enum.js";

const router = Router()


const arrayUsuarios = []

router.post('/', async (req, res, next) => {

    try {

        const { nombre, apellido, email } = req.body

        if (!nombre || !apellido || !email) {

            CustomError.crearError({
                nombre: "Usuario nuevo faltan datos",
                causa: generarInfoError({ nombre, apellido, email }),
                mensaje: "Error al crear el usuario",
                codigo: EErrors.VALIDATION_ERROR
            })
        }


        if (arrayUsuarios.find(user => user.email === email)) {

            CustomError.crearError({
                nombre: "Usuario duplicado",
                causa: "El usuario ya existe",
                mensaje: "Error al crear el usuario",
                codigo: EErrors.DUPLICATE_ERROR
            })
        }

        const usuario = {
            nombre,
            apellido,
            email
        }

        arrayUsuarios.push(usuario)
        res.status(201).json({ usuario })

    } catch (error) {
        next(error)
    }




})

export default router
