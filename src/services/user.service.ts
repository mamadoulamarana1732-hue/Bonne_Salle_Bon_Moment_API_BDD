import type { IUser } from "../models/user.model.ts";
import userRepository from "../repositories/user.repository.ts"


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
const deleteUser = async (id: string) => {
    const user = await userRepository.deleteUser(id);
    if (!user) {
        throw new Error("room not found");
    }
    return user;
};
const updateUser = async (id: string, updateData: Partial<IUser>) => {
    const user = await userRepository.updateUser(id,updateData);
    if (!user) {
        throw new Error("room not found");
    }
    return user;
};

export default {getAll, getById, create, deleteUser, updateUser};