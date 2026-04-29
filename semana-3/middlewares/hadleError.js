import { EErrors } from "../services/errors/enum.js"



const manejadorError = (error, req, res, next) => {

    console.log(error.causa)

    switch (error.code) {
        case EErrors.RUTA_ERROR:
            res.status(404).send({ error: error.message })
            break;
        case EErrors.METHOD_ERROR:
            res.status(405).send({ error: error.message })
            break;
        case EErrors.VALIDATION_ERROR:
            res.status(400).send({ error: error.message })
            break;
        case EErrors.DUPLICATE_ERROR:
            res.status(409).send({ error: error.message })
            break;
        default:
            res.status(500).send({ error: error.message })
            break;
    }
}

export default manejadorError