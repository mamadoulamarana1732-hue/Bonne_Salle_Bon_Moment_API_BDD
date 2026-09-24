import Joi from "joi";

const reservationSchema = Joi.object({
  salleId: Joi.string()
    .min(2)
    .max(200)
    .message("Erreur de Saisie du champ")
    .required(),

  date: Joi.date()
    .min("now")
    .message("Erreur de Saisie du champ")
    .required(),

  heureDebut: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .message("Erreur de Saisie du champ")
    .required(),

  heureFin: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .message("Erreur de Saisie du champ")
    .required(),
  motif: Joi.string()
    .min(2)
    .max(200)
    .message("Erreur de Saisie du champ")
    .required(),

  // userId: Joi.string()
  //   .hex()
  //   .length(24)
  //   .required(),
});

export default reservationSchema;