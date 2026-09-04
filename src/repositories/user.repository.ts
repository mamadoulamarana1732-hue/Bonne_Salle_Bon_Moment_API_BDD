import { UserModel } from "../models/user.model.ts";

const userRepository = {
  findById: async (id: string) => {
    return UserModel.findById(id);
  },

  create: async (user: { name: string }) => {
    return UserModel.create(user);
  },
};

export default userRepository;