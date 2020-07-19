import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        dateOfBirth: Date,
    },
    { timestamps: true },
);

type UserType = {
    _id: number,
    name: string,
    email: string,
    dateOfBirth: Date,
}

export { UserType };
export default mongoose.model<mongoose.Document>("user", userSchema);