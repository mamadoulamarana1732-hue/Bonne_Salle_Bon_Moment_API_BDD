import Joi from "joi";

const salleSchema = Joi.object({
  label: Joi.string()
    .min(2)
    .max(50)
    .message("Erreur de Saisie du champ nom")
    .required(),

  capacity: Joi.number()
    .min(1)
    .max(500)
    .message("Erreur de Saisie du champ capacité")
    .required(),

  size: Joi.string()
    .min(2)
    .max(50)
    .message("Erreur de Saisie du champ taille")
    .required(),

  building: Joi.string()
    .min(2)
    .max(50)
    .message("Erreur de Saisie du champ bloc")
    .required(),

  floor: Joi.number()
    .min(1)
    .max(500)
    .message("Erreur de Saisie du champ étage")
    .required(),

});
export default salleSchema;