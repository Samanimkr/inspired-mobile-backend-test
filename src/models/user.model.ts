import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        name: { type: String, required: true },
        email: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
    },
    { timestamps: true },
);

const User = module.exports = mongoose.model('User', userSchema);