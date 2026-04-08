import { userRepository } from '../persistence/user.repository.js'

export const userService = {
    getAll: async () => {
        return await userRepository.getAll()
    },

    create: async (name, email) => {
        const user = await userRepository.create(name, email)
        return user
    }
}