export const showProcessInfo = () => {
    console.log("Plataforma:", process.platform)
    console.log("PID:", process.pid)
    console.log("Variables de entorno:", process.env.NODE_ENV)
    console.log("Argumentos:", process.argv)
}