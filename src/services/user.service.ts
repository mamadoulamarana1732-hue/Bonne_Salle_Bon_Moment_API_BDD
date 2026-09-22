// import userRepository from "../repositories/user.repository.ts";

import type { IUser } from "../models/user.model.ts";
import userRepository from "../repositories/user.repository.ts"

// const export userfindByEmail = async(email:string)=>{
// try {
//     return await userRepository.findOneByEmail(email);
// } catch (error) {
    
// }
// };
// // export default userservice;
// // export default userservice;
const getAll = async()=>{
    const users = await userRepository.getAll();
    return users;
};

const getById = async (id: string) => {
    const user = await userRepository.getById(id);
    if (!user) {
        throw new Error("room not found");
    }
    return user;
};
const create = async(User:IUser)=>{
    const user = await userRepository.create(User);
    return user;
};

export default {getAll, getById, create};