import type { Request, Response } from "express";
import reservationService from "../services/reservation.service.ts";
import reservationSchema from "../validators/reservation.validators.ts";
import type { IReservation } from "../models/reservation.model.ts";
// import salleService from "../services/salle.service.ts";
// import salleSchema from "../validators/salle.validators.ts";
// import type { ISalle } from "../models/salle.model.ts";

  const getAll = async (req: Request, res: Response) => {
    try {
      const reservations = await reservationService.getAll();

      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la récupération des reservations",
        error,
      });
    }
  };

 
  const create = async (req: Request, res: Response) => {
     try {
      const { error, value } = reservationSchema.validate(req.body);

      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const { salleId, date, heureDebut, heureFin, motif} = value;
       const create = reservationService.create(req.body);
    

       res.status(201).json({
         message: "Réservation créée avec succès",
       });

     } catch (error) {
       res.status(500).json({
         message: "Erreur lors de la création de la reservation",
         error,
       });
     }
   };

   
  const updateReservation = async (req:Request<{id:string}, Partial<IReservation>>, res: Response) => {
    try {
      const id  = req.params.id;
      const updateData = req.body;

      const upadateReservation = await reservationService.updateReservation(id, updateData);

      if (!upadateReservation) {
        return res.status(404).json({
          message: "Réservation non trouvée",
        });
      }

      res.status(200).json({
        message: "Réservation modifiée avec succès",
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de modification de la Réservation",
        error,
      });
    }
  };

  const deleteReservation = async (req:Request<{id:string}>, res: Response) => {
    try {
      const id  = req.params.id;

      const deleteReservation = await reservationService.deleteReservation(id);

      if (!deleteReservation) {
        return res.status(404).json({
          message: "Réservation non trouvée",
        });
      }

      res.status(200).json({
        message: "Réservation supprimée avec succès",
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la suppression de la Réservation",
        error,
      });
    }
  };



   //   const getById = async (req: Request<{id:string}>, res: Response) => {
  //   try {
  //     const id = req.params.id;
  //     const salle = await salleService.getById(id);
  //     if (!salle) {
  //       return res.status(404).json({
  //         message: "Salle non trouvée",
  //       });
  //     }

  //     res.status(200).json(salle);
  //   } catch (error) {
  //     res.status(500).json({
  //       message: "Erreur lors de la récupération de la salle",
  //       error,
  //     });
  //   }
  // };
  // 


  // , getById, create, deleteSalle, updateSalle
export default {getAll, create, updateReservation, deleteReservation};
