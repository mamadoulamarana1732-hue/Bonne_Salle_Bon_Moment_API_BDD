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

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).json({
          message: "Utilisateur non trouvé",
        });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération de l'utilisateur",
        error,
      });
    }
  },
};

export default userController;