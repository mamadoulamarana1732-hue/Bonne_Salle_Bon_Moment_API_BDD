import express from "express";
import userController from "../controllers/user.controller.ts";

const userRouter = express.Router();

userRouter.get("/users", userController.getAll);
userRouter.get("/users/:id", userController.getById);
userRouter.post("/users/create", userController.create);

export default userRouter;

