import Joi from "joi";

const userSchema = Joi.object({
  nom: Joi.string()
    .min(2)
    .max(50)
    .required(),

  prenom: Joi.string()
    .min(2)
    .max(50)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .required(),

  UserRole: Joi.string()
    .valid("User", "Admin", "Moderator")
    .optional(),
});
export default userSchema;