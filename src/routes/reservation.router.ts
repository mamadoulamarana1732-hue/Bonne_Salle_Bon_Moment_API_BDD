import express from "express";
import reservationController from "../controllers/reservation.controller.ts";
import reservationSchema from "../validators/reservation.validators.ts";
import { validate } from "../middlewere/middlewere.ts";

const reservationRouter = express.Router();

reservationRouter.get("/reservations", reservationController.getAll);
reservationRouter.post("/reservations/create", validate(reservationSchema), reservationController.create);
reservationRouter.put('/reservations/update/:id', reservationController.updateReservation);
reservationRouter.delete("/reservations/delete/:id", reservationController.deleteReservation);



export default reservationRouter;

