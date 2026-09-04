import userRepository from "../repositories/user.repository.ts"
const getById = async (id: string) => {
 const user = await userRepository.findById(id);
 if (!user) {
 throw new Error("User not found");
 }
 return user;
};
export default {
  getById,
  // Autres fonctions
};