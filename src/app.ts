import express, { Application } from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/user.router";

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/users", userRoutes);

// Global error handling
app.use((error: any, req: any, res: any, next: any) => {
    console.log(error); // use during development stage

    res.status(500).send('Oops! Something went wrong, please try again.');
});


export default app;