import type { Request, Response } from "express";
import salleService from "../services/salle.service.ts";
import salleSchema from "../validators/salle.validators.ts";
import type { ISalle } from "../models/salle.model.ts";

  const getAll = async (req: Request, res: Response) => {
    try {
      const salles = await salleService.getAll();

      res.status(200).json(salles);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération des salles",
        error,
      });
    }
  };

    const getById = async (req: Request<{id:string}>, res: Response) => {
    try {
      const id = req.params.id;
      const salle = await salleService.getById(id);
      if (!salle) {
        return res.status(404).json({
          message: "Salle non trouvée",
        });
      }

      res.status(200).json(salle);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération de la salle",
        error,
      });
    }
  };

  const create = async (req: Request, res: Response) => {
     try {
      const { error, value } = salleSchema.validate(req.body);

      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const { label, capacity, size, building, floor } = value;
       const user = salleService.create(req.body);
    

       res.status(201).json({
         message: "Salle créée avec succès",
       });

     } catch (error) {
       res.status(500).json({
         message: "Erreur lors de la création de la salle",
         error,
       });
     }
   };

  
  const deleteSalle = async (req:Request<{id:string}>, res: Response) => {
    try {
      const id  = req.params.id;

      const deletedSalle = await salleService.deleteSalle(id);

      if (!deletedSalle) {
        return res.status(404).json({
          message: "Salle non trouvée",
        });
      }

      res.status(200).json({
        message: "Salle supprimée avec succès",
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la suppression de la salle",
        error,
      });
    }
  };


  const updateSalle = async (req:Request<{id:string}, Partial<ISalle>>, res: Response) => {
    try {
      const id  = req.params.id;
      const updateData = req.body;

      const upadateSalle = await salleService.updateSalle(id, updateData);

      if (!upadateSalle) {
        return res.status(404).json({
          message: "Salle non trouvée",
        });
      }

      res.status(200).json({
        message: "Salle modifiée avec succès",
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de modification de la salle",
        error,
      });
    }
  };
export default {getAll, getById, create, deleteSalle, updateSalle};
