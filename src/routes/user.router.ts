import express from "express";
import userController from "../controllers/user.controller.ts";

const userRouter = express.Router();

userRouter.get("/users", userController.getAll);

export default userRouter;