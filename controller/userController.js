import User from "../models/userModel.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body)
    try {
        const insertedUser = await user.save()
        res.status(200).json(insertedUser)
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({_id: req.params.id})
        res.status(200).json(deletedUser)
    } catch (error) {
        console.log(error)
    }
}