import express from 'express'
import { config } from './config/commander.js'
import { env } from './config/env.js'
import { connectDB } from './config/db.js'
import userRoutes from './routes/user.routes.js'
import { showProcessInfo } from './utils/processInfo.js'
import sumRoutes from "./routes/sum.routes.js"
import mockRoutes from './routes/mock.routes.js'


const app = express()


// debug opcional
if (env.NODE_ENV !== "production") {
    showProcessInfo()
}

// middlewares
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// rutas
app.use('/api/users', userRoutes)

app.use('/api/sum', sumRoutes)

app.use('/', mockRoutes)


// puerto
const PORT = env.port || config.port

if (!PORT) {
    console.error("Puerto inválido")
    process.exit(1)
}

// init
const startServer = async () => {
    try {
        await connectDB()

        app.listen(PORT, () => {
            console.log("Ambiente de ejecución:", config.mode)
            console.log("CONFIG:", config)
            console.log(`Servidor corriendo en http://localhost:${PORT}`)
        })

    } catch (error) {
        console.error("Error al iniciar:", error)
        process.exit(1)
    }
}

startServer()


process.on('exit', (code) => {
    console.log(`Proceso finalizado con código ${code}`)
})



process.on('uncaughtException', (err) => {
    console.error("Error no controlado:", err)
    process.exit(1)
})

process.on('unhandledRejection', (reason) => {
    console.error("Promise no manejada:", reason)
    process.exit(5)
})


// setTimeout(() => {

//     Promise.reject("❌ Error de prueba")

// }, 2000)



// console.log("Proceso iniciado", process.platform);
// console.log("Proceso iniciado", process.on('message', (msg) => {
//     console.log("Mensaje recibido:", msg)
// }));



// console.log("Proceso iniciado", process.exit()); 