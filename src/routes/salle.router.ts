import express from "express";
import salleController from "../controllers/salle.controller.ts";
import salleSchema from "../validators/salle.validators.ts";
import { validate } from "../middlewere/middlewere.ts";

const salleRouter = express.Router();

salleRouter.get("/salles", salleController.getAll);
salleRouter.post("/salles/create", validate(salleSchema),salleController.create);
salleRouter.put('/salles/modifier/:id', validate(salleSchema), salleController.updateSalle);


//Pas utilisée dans ce projet
// salleRouter.get("/salles/:id", salleController.getById);
// salleRouter.delete("/salles/supprimer/:id", salleController.deleteSalle);

export default salleRouter;

