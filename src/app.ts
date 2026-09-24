import express from "express";
import cors from "cors";
import { connectDB } from "../data/mongo.database.ts";
import userRouter from "./routes/user.router.ts";  
import salleRouter from "./routes/salle.router.ts";
import reservationRouter from "./routes/reservation.router.ts";

const app = express();

app.use(express.json());
app.use(cors({
origin: "http://localhost:5173"
}));
connectDB();

app.use("/api", userRouter, salleRouter, reservationRouter);

export default app;