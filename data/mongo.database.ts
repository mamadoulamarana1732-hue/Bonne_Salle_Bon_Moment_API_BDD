/*import mongoose from "mongoose";
export const connectDatabase = async () => {
 await
mongoose.connect("mongodb://localhost:27017");
 console.log("Database connected");
};

*/
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await 
        mongoose.connect("mongodb://localhost:27017");

        console.log("MongoDB connecté !");
    } catch (error) {
        console.error("Erreur de connexion MongoDB :", error);
    }
};