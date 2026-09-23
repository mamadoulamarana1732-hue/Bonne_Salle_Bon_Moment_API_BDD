import express from "express";
import salleController from "../controllers/salle.controller.ts";

const salleRouter = express.Router();

salleRouter.get("/salles", salleController.getAll);
salleRouter.get("/salles/:id", salleController.getById);
salleRouter.post("/salles/create", salleController.create);
salleRouter.delete("/salles/supprimer/:id", salleController.deleteSalle);
salleRouter.put('/salles/modifier/:id', salleController.updateSalle);

export default salleRouter;

