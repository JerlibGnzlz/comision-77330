process.on('message', (data) => {
    console.log(" Hijo recibió:", data)

    if (data.type === "SUM") {
        let result = 0

        // simulamos operación pesada
        for (let i = 0; i < 5e9; i++) {
            result += i
        }

        // devuelve resultado al padre
        process.send({ result })
    }
})