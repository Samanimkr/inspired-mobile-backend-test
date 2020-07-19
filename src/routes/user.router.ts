import express from "express";
import mongoose from "mongoose";

import User from "../models/user.model";

const router = express.Router();

// GET all users
router.get("/", async (_req, res, next) => {
    try {
        const users = await User.find();
        res.status(201).send(users);
    }
    catch(err) {
        next(err)
    }
});

// CREATE a user
router.post("/", async (req, res, next) => {
    try {
        const user: mongoose.Document = new User({
            name: req.body.name,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
        });

        const savedUser: mongoose.Document = await user.save();
        res.status(201).send(savedUser);
    }
    catch(err) {
        next(err);
    }
});

// GET user by id
router.get("/:userId", async (req, res, next) => {
    try {
        const id = req.params.userId;
        const user = await User.findById(id);

        if (!user) res.status(404).json({ message: "User not found!" });
        res.status(201).send(user);
    }
    catch(err) {
        next(err);
    }
});

// DELETE user by id
router.delete("/:userId",  async (req, res, next) => {
    try {
        const id = req.params.userId;
        const user = await User.findByIdAndDelete(id);

        if (!user) res.status(404).json({ message: "User not found!" });
        res.status(201).send("User deleted successfully");
    }
    catch(err) {
        next(err);
    }
});


export default router;