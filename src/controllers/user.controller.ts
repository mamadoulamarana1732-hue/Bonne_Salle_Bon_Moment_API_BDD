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
      console.log(user);

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
      // 1. Récupération des données envoyées dans le corps de la requête (POST)
      const { role, nom, prenom, email, password, id } = req.body;

      // 2. Validation basique des champs obligatoires
      if (!nom || !prenom || !email || !password) {
        return res.status(400).json({
          message:
            "Veuillez remplir tous les champs obligatoires (nom, prenom, email, password).",
        });
      }

      // 3. Création et sauvegarde de l'utilisateur dans MongoDB
      const newUser = await UserModel.create({
        role: role || "User", // Valeur par défaut si aucun rôle n'est fourni
        nom,
        prenom,
        email,
        password,
        ...(id && { id }), // Ajoute le champ id s'il est transmis
      });

      // 4. Renvoi du statut 201 (Created) avec l'utilisateur créé
      res.status(201).json({
        message: "Utilisateur créé avec succès",
        user: newUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la création de l'utilisateur",
        error,
      });
    }
  },

  // Insertion des datas
  seedData: async (req: Request, res: Response) => {
    try {
      const rawUsers = [
        { role: "Admin", nom: "BAH", prenom: "Mamadou", email: "mamadou.pro@gmail.com", password: "TestMdpTest", id: "jhkhkhkhk" },
        { role: "Admin", nom: "DIALLO", prenom: "Rougui", email: "rouguiatou.pro@gmail.com", password: "TestMdpTest", id: "015555ggg" },
      ];

      const insertedUsers = await UserModel.insertMany(rawUsers);

      res.status(201).json({
        message: `${insertedUsers.length} utilisateurs ajoutés avec succès !`,
        users: insertedUsers,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur d'ajout",
        error,
      });
    }
  },
};

export default userController;