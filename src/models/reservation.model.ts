import { Schema, model, Document, Types } from "mongoose";

export interface IReservation extends Document {
  salleId: Types.ObjectId;
  date: Date;
  heureDebut: string;
  heureFin: string;
  motif: string;
  // userId: Types.ObjectId;
}

const reservationSchema = new Schema<IReservation>(
  {
    salleId: {
      type: Schema.Types.ObjectId,
      ref: "Salle",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    heureDebut: {
      type: String,
      required: true,
      trim: true,
    },
    heureFin: {
      type: String,
      required: true,
      trim: true,
    },
    motif: {
      type: String,
      required: true,
      trim: true,
    },
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

export const ReservationModel = model<IReservation>("Reservation", reservationSchema);