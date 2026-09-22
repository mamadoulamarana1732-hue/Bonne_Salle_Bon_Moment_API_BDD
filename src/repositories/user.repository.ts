import { UserModel, type IUser } from "../models/user.model.ts";

const getAll = async()=> {
    const users = await UserModel.find();
    return users;
};
const getById = async(id:string)=> {
    const user = await UserModel.findById(id);
    return user;
};
const create = async(User:IUser)=> {
    const user = await UserModel.create(User);
    return user;
};
export default {getAll, getById, create};