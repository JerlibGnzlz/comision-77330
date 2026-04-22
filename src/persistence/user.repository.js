import { userModel } from "./models/user.model.js"

export const userRepository = {
    getAll: async () => {
        return await userModel.find()
    },

    create: async (name, email) => {
        const user = new userModel({ name, email })
        await user.save()
        return user
    }
}