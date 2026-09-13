import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
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
      unique: true, // contrainte au niveau base pour éviter les doublons
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
      default: "User",
    },
  },
  {
    timestamps: true, // gère createdAt / updatedAt automatiquement
    collection: "users", // nom explicite de la collection demandé
  }
);

// Nom du modèle "User" -> collection "users" (grâce à `collection: "users"` ci-dessus,
// on n'a pas besoin de compter sur la pluralisation automatique de Mongoose)
export const UserModel = model<IUser>("User", userSchema);
