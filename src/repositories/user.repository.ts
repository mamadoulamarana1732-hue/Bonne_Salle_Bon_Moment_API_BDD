import { UserModel } from "../models/user.model.ts";

const findOneByEmail = async (email: string) => {
return await UserModel.findOne({ email });
}

export default{findOneByEmail};