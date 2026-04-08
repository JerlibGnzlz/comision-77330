import { Router } from "express"
import { fork } from "child_process"

const router = Router()

router.get("/", (req, res) => {
    const child = fork("./src/utils/child.js")

    child.send({ type: "SUM" })

    child.on('message', (msg) => {
        res.json({
            status: "success",
            result: msg.result
        })
    })

    child.on('error', (err) => {
        console.error(err)
        res.status(500).json({ error: "Error en proceso hijo" })
    })
})

export default router