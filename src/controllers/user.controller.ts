import type { Request, Response } from "express";
import { UserModel, type IUser } from "../models/user.model.ts";
import userSchema from "../validators/user.validators.ts";
import userservice from "../services/user.service.ts";
import { request } from "node:http";

// const userController = {

  const getAll = async (req: Request, res: Response) => {
    try {
      const users = await userservice.getAll();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération des utilisateurs",
        error,
      });
    }
  };

    const getById = async (req: Request<{id:string}>, res: Response) => {
    try {
      const id = req.params.id;
      const user = await userservice.getById(id);
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
  };

  const create = async (req: Request, res: Response) => {
     try {
      const { error, value } = userSchema.validate(req.body);

      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
       const { nom, prenom, email, password, role } = value;
       const user = userservice.create(req.body);
    

       res.status(201).json({
         message: "Utilisateur créé avec succès",
       });

     } catch (error) {
       res.status(500).json({
         message: "Erreur lors de la création de l'utilisateur",
         error,
       });
     }
   };

  
  const deleteUser = async (req:Request<{id:string}>, res: Response) => {
    try {
      const id  = req.params.id;

      const deletedUser = await userservice.deleteUser(id);

      if (!deletedUser) {
        return res.status(404).json({
          message: "Utilisateur non trouvé",
        });
      }

      res.status(200).json({
        message: "Utilisateur supprimé avec succès",
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la suppression de l'utilisateur",
        error,
      });
    }
  };


  const updateUser = async (req:Request<{id:string}, Partial<IUser>>, res: Response) => {
    try {
      const id  = req.params.id;
      const updateData = req.body;

      const upadateUser = await userservice.updateUser(id, updateData);

      if (!upadateUser) {
        return res.status(404).json({
          message: "Utilisateur non trouvé",
        });
      }

      res.status(200).json({
        message: "Utilisateur modifié avec succès",
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de modification de l'utilisateur",
        error,
      });
    }
  };
export default {getAll, getById, create, deleteUser, updateUser};
