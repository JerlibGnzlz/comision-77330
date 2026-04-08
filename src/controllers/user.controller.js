import { userService } from '../services/user.service.js'

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getAll()
        res.json(users)
    } catch (error) {
        console.error("Error al obtener usuarios:", error)
        res.status(500).json({ error: "Error interno del servidor" })
    }
}

export const postUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const user = await userService.create(name, email)
        res.json(user)
    } catch (error) {
        console.error("Error al crear usuario:", error)
        res.status(500).json({ error: "Error interno del servidor" })
    }
}
