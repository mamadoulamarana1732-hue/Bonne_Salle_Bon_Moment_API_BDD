import type { Request, Response } from "express";
import { UserModel } from "../models/user.model.ts";

const userController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération des utilisateurs",
        error,
      });
    }
  },
};

export default userController;