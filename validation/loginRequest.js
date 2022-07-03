const Joi = require("@hapi/joi");

const loginRequest = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().min(6).max(20).required(),
});

module.exports = loginRequest;
