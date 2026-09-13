import express from "express";
import { connectDB } from "../data/mongo.database.ts";
import userRouter from "./routes/user.router.ts";   

const app = express();

app.use(express.json());

connectDB();

app.use("/api", userRouter);

export default app;