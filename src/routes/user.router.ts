import express from "express";
import mongoose from "mongoose";

import User, { UserType } from "../models/user.model";

const router = express.Router();

router.get("/", (_req, res) => {
    res.status(200).json({
        message: "Handling GET requests to /users"
    });
});

// Create a user
router.post("/", async (req, res, next) => {
    try {
        const user: mongoose.Document = new User({
            name: req.body.name,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
        });

        const savedUser: mongoose.Document = await user.save();
        res.status(201).send(savedUser);
    } catch(err) {
        next(err);
    }
});

// Get user by id
router.get("/:userId", (req, res) => {
    const id = req.params.userId;

    User.findById(id, (err, user) => {
        if (err || !user) res.status(404).json({ message: "User not found!" });
        res.send(user); 
    });
});


export default router;