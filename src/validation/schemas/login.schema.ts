import * as Joi from 'joi';

export const loginSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  password: Joi.string().min(4).required(),
});
