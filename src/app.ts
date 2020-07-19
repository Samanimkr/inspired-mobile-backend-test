import express, { Application } from "express";

import userRoutes from './routes/user.router';

const app: Application = express();

app.use('/user', userRoutes);

export default app;