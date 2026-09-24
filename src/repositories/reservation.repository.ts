import { ReservationModel, type IReservation } from "../models/reservation.model.ts";

const getAll = async()=> {
    const reservations = await ReservationModel.find();
    return reservations;
};

const create = async(Reservation:IReservation)=> {
    const reservation = await ReservationModel.create(Reservation);
    return reservation;
};

const updateReservation = async (id: string, updateData: Partial<IReservation>) => {
  const updatereservation = await ReservationModel.findByIdAndUpdate(
    id,
    updateData,
    { returnDocument: 'after'}
  );
  return updatereservation;
 };

const deleteReservation = async(id:string)=> {
    const reservation = await ReservationModel.findByIdAndDelete(id);
    return reservation;
};
export default {getAll, create, updateReservation, deleteReservation};