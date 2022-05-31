const Joi = require("@hapi/joi");

const userPostRequest = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().min(6).max(20).required(),
  email: Joi.string().required().email(),
  gender: Joi.string(),
  age: Joi.string(),
});

module.exports = userPostRequest;
