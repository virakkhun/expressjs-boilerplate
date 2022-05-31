const User = require("../models/User");
const userSchema = require("../validation/userRequest");

const createUser = async (req, res) => {
  const { body } = req;

  const { error } = userSchema.validate(body);

  if (!error) {
    const user = {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      gender: body.gender,
      age: body.age,
    };

    const result = await User.create(user);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({
        message: "Error!!!",
      });
    }
  } else {
    const err = error.details[0].message;

    res.status(200).json({ message: err });
  }
};

const getAllUser = async (req, res) => {
  const users = await User.findAll();
  users.every((user) => user instanceof User);
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({
      message: "Error!!!",
    });
  }
};

const getSingleUser = async (req, res) => {
  const user = await User.findAll({
    where: {
      firstName: body.firstName,
    },
  });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json({
      message: "Error!!!",
    });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getSingleUser,
};
