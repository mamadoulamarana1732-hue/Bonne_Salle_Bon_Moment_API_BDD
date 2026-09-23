import Joi from "joi";

const salleSchema = Joi.object({
  label: Joi.string()
    .min(2)
    .max(50)
    .required(),

  capacity: Joi.number()
    .min(1)
    .max(10)
    .required(),

  size: Joi.string()
    .min(2)
    .max(50)
    .required(),

  building: Joi.string()
    .min(2)
    .max(50)
    .required(),

  floor: Joi.number()
    .min(1)
    .max(10)
    .required(),

});
export default salleSchema;