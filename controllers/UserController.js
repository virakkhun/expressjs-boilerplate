const User = require("../models/User");

const createUser = async (req, res) => {
  if (!req.body.person.firstName) {
    res.status(404).json({
      message: "Can not be found!!",
    });
    return;
  }

  const user = {
    firstName: req.body.person.firstName ? req.body.person.firstName : "John",
    lastName: req.body.person.lastName ? req.body.person.lastName : "Doe",
  };

  const result = await User.create(user);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({
      message: "Error!!!",
    });
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
      firstName: req.body.firstName,
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
