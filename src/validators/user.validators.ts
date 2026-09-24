import Joi from "joi";

const userSchema = Joi.object({
  nom: Joi.string()
    .min(2)
    .max(50)
    .message("Erreur de Saisie du champ")
    .required(),
  
  prenom: Joi.string()
    .min(2)
    .max(50)
    .message("Erreur de Saisie du champ")
    .required(),

  email: Joi.string()
    .email()
    .message("Erreur de Saisie du champ")
    .required(),

  password: Joi.string()
    .min(8)
    .message("Erreur de Saisie du champ")
    .required(),

  role: Joi.string()
    .valid("Formateur", "Admin")
    .optional(),
});
export default userSchema;