import Joi from "joi";

// Rôles autorisés — centralisés pour être réutilisés ailleurs (service, types...)
export const USER_ROLES = ["Admin", "User", "Moderator"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const createUserSchema = Joi.object({
  role: Joi.string()
    .valid(...USER_ROLES)
    .optional()
    .default("User")
    .messages({
      "any.only": `Le rôle doit être l'un des suivants : ${USER_ROLES.join(", ")}`,
    }),

  nom: Joi.string().min(2).required().messages({
    "string.empty": "Le nom est obligatoire",
    "any.required": "Le nom est obligatoire",
    "string.min": "Le nom doit contenir au moins 2 caractères",
  }),

  prenom: Joi.string().min(2).required().messages({
    "string.empty": "Le prénom est obligatoire",
    "any.required": "Le prénom est obligatoire",
    "string.min": "Le prénom doit contenir au moins 2 caractères",
  }),

  email: Joi.string().email().required().messages({
    "string.empty": "L'email est obligatoire",
    "any.required": "L'email est obligatoire",
    "string.email": "Format d'email invalide",
  }),

  password: Joi.string().min(6).required().messages({
    "string.empty": "Le mot de passe est obligatoire",
    "any.required": "Le mot de passe est obligatoire",
    "string.min": "Le mot de passe doit faire au moins 6 caractères",
  }),

  id: Joi.string().optional(),
});

// Schéma dédié à la mise à jour : tous les champs deviennent optionnels,
// mais on garde les mêmes règles de validation (min, email, valeurs autorisées...)
export const updateUserSchema = createUserSchema.fork(
  ["nom", "prenom", "email", "password"],
  (schema) => schema.optional()
);