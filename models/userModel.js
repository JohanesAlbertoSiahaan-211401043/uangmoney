import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }, 
    job: {
        type: String, 
        required: true
    },
    transaction: {
        type: [
            {
                title: {
                    type: String, 
                    required: true
                },
                amount: {
                    type: Number,
                    required: true
                }, 
                time: {
                    type: String, 
                    required: true
                },
                category: {
                    type: String, 
                    required: true
                }
            }
        ], 
        required: true
    },
    target: {
        type: [
            {
                title: {
                    type: String, 
                    required: true
                },
                description: {
                    type: String, 
                    required: true
                }, 
                amount: {
                    type: Number, 
                    required: true
                },
                time: {
                    type: String, 
                    required: true
                }, 
                isDone: {
                    type: Boolean, 
                    required: true
                }
            }
        ],
        required: true
    }
})

export default mongoose.model("User", User)