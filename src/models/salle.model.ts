import { Schema, model, Document } from "mongoose";

export interface ISalle extends Document {
  label: string;
  capacity: number;
  size: string;
  building: string;
  floor: number;
}

const salleSchema = new Schema<ISalle>(
  {
    label: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    size: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    building: {
      type: String,
      required: true,
      minlength: 6,
    },
    floor: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

export const SalleModel = model<ISalle>("Salle", salleSchema);