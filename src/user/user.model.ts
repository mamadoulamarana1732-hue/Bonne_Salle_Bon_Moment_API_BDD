// import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

export interface IUser extends Document {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema({

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
      default: "User",
    },
  },
  {
    timestamps: true, 
    collection: "users",
  }
);
const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export default UserModel;

