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
const deleteUser = async(id:string)=> {
    const user = await UserModel.findByIdAndDelete(id);
    return user;
};
const updateUser = async (id: string, updateData: Partial<IUser>) => {
  const updateuser = await UserModel.findByIdAndUpdate(
    id,
    updateData,
    { returnDocument: 'after'}
  );
  return updateuser;
};
export default {getAll, getById, create, deleteUser, updateUser};