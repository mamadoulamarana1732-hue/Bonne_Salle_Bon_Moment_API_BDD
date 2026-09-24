import express from "express";
import userController from "../controllers/user.controller.ts";
import { validate } from "../middlewere/middlewere.ts";
import userSchema from "../validators/user.validators.ts";


const userRouter = express.Router();

userRouter.get("/users", userController.getAll);
userRouter.post("/users/create", validate(userSchema), userController.create);

//Ces routes existent mais pas démandé par le projet
// userRouter.delete("/users/supprimer/:id", userController.deleteUser);
// userRouter.get("/users/:id", userController.getById);
// userRouter.put('/users/modifier/:id', userController.updateUser);

export default userRouter;

