import { SalleModel, type ISalle } from "../models/salle.model.ts"

const getAll = async()=> {
    const salles = await SalleModel.find();
    return salles;
};
const getById = async(id:string)=> {
    const salle = await SalleModel.findById(id);
    return salle;
};
const create = async(Salle:ISalle)=> {
    const salle = await SalleModel.create(Salle);
    return salle;
};
const deleteSalle = async(id:string)=> {
    const salle = await SalleModel.findByIdAndDelete(id);
    return salle;
};
const updateSalle = async (id: string, updateData: Partial<ISalle>) => {
  const updatesalle = await SalleModel.findByIdAndUpdate(
    id,
    updateData,
    { returnDocument: 'after'}
  );
  return updatesalle;
};
export default {getAll, getById, create, deleteSalle, updateSalle};