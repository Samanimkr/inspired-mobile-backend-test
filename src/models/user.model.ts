import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: String,
        email: String,
        dateOfBirth: Date,
    },
    { timestamps: true },
);

export default mongoose.model<mongoose.Document>("user", userSchema);