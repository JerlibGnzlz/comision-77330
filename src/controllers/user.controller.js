import { userModel } from '../persistence/models/user.model.js'
import { userService } from '../services/user.service.js'
import { faker } from '@faker-js/faker';
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



export const createUserMock = async (req, res) => {
    const data = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
    }
    try {
        const user = await userModel.create(data)
        res.status(201).json({ payload: "user creado", user })
    } catch (error) {
        console.error("Error al crear usuario:", error)
        res.status(500).json({ error: "Error interno del servidor" })
    }
}


export const createUsersMock = async (req, res) => {

    try {
        const { quantity } = req.params


        for (let i = 0; i < Number(quantity); i++) {
            const data = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
            }
            await userModel.insertMany(data)
        }

        res.status(201).json({
            payload: "Usuarios creados",
            cantidad: quantity
        })

    } catch (error) {
        console.log(error)
    }
}