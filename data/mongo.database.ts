import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await 
        mongoose.connect("mongodb://localhost:27017/admin");

        console.log("MongoDB connecté !");
    } catch (error) {
        console.error("Erreur de connexion MongoDB :", error);
    }
};