import type { IReservation } from "../models/reservation.model.ts";
import reservationRepository from "../repositories/reservation.repository.ts";

const getAll = async()=>{
    const reservations = await reservationRepository.getAll();
    return reservations;
};

const create = async(Reservation:IReservation)=>{
    const reservation = await reservationRepository.create(Reservation);
    return reservation;
};

const updateReservation = async (id: string, updateData: Partial<IReservation>) => {
    const reservation = await reservationRepository.updateReservation(id,updateData);
    if (!reservation) {
        throw new Error("room not found");
    }
    return reservation;
};

const deleteReservation = async (id: string) => {
    const reservation = await reservationRepository.deleteReservation(id);
    if (!reservation) {
        throw new Error("Réservation non trouvée");
    }
    return reservation;
};
export default {getAll, create, updateReservation, deleteReservation };