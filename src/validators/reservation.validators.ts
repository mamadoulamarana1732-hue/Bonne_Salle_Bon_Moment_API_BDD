import Joi from "joi";

const reservationSchema = Joi.object({
  salleId: Joi.string()
    .min(2)
    .max(200)
    .required(),

  date: Joi.date()
    .min("now")
    .required(),

  heureDebut: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),

  heureFin: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),

  motif: Joi.string()
    .min(2)
    .max(200)
    .required(),

  // userId: Joi.string()
  //   .hex()
  //   .length(24)
  //   .required(),
});

export default reservationSchema;