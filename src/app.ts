import express from "express";
import { connectDB } from "../data/mongo.database.ts";

const app = express();

app.use(express.json());

connectDB();

export default app;