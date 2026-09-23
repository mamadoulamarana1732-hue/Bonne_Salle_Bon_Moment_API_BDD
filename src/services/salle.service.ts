import type { ISalle } from "../models/salle.model.ts";
import salleRepository from "../repositories/salle.repository.ts";

const getAll = async()=>{
    const salles = await salleRepository.getAll();
    return salles;
};

const getById = async (id: string) => {
    const salle = await salleRepository.getById(id);
    if (!salle) {
        throw new Error("room not found");
    }
    return salle;
};
const create = async(Salle:ISalle)=>{
    const salle = await salleRepository.create(Salle);
    return salle;
};
const deleteSalle = async (id: string) => {
    const salle = await salleRepository.deleteSalle(id);
    if (!salle) {
        throw new Error("room not found");
    }
    return salle;
};
const updateSalle = async (id: string, updateData: Partial<ISalle>) => {
    const salle = await salleRepository.updateSalle(id,updateData);
    if (!salle) {
        throw new Error("room not found");
    }
    return salle;
};
export default {getAll, getById, create, deleteSalle, updateSalle};