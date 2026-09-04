import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  prenom: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  id: {
    type: Number,
    required: true,
  },
});

export const UserModel = mongoose.model("User", userSchema);