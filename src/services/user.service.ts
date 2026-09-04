import userRepository from "../repositories/user.repository.ts"
const getById = async (id: string) => {
 const recipe = await userRepository.findById(id);
 if (!recipe) {
 throw new Error("Recipe not found");
 }
 return recipe;
};
export default {
  getById,
  // Autres fonctions
};