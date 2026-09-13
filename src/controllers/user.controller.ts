import type { Request, Response } from "express";
import { UserModel } from "../models/user.model.ts";
import userSchema from "../validators/user.validators.ts";

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

 

create: async (req: Request, res: Response) => {
  try {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { nom, prenom, email, password, role } = value;

    // ... reste du code (vérification email existant, hash, création)

  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'utilisateur",
      error,
    });
  }
},
};

export default userController;