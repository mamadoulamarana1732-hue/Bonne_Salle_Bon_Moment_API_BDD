import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>(
  {
    nom: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    prenom: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      default: "Formateur",
    },
  },
  {
    timestamps: true, 
    collection: "users",
  }
);

export const UserModel = model<IUser>("User", userSchema);