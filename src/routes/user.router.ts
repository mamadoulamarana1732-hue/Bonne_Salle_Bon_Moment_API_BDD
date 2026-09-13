import express from "express";
import userController from "../controllers/user.controller.ts";
import { validate } from "../middlewere/middlewere.user.ts";
import userSchema from "../validators/user.validators.ts";

const userRouter = express.Router();

userRouter.get("/users", userController.getAll);
userRouter.get("/users/:id", userController.getById);
userRouter.post("/users/create", validate(userSchema), userController.create);

export default userRouter;

