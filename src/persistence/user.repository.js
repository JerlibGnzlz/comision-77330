import UserModel from './models/user.model.js'

export const userRepository = {
    getAll: async () => {
        return await UserModel.find()
    },

    create: async (name, email) => {
        const user = new UserModel({ name, email })
        await user.save()
        return user
    }
}