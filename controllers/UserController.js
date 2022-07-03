const User = require("../models/User");
const userValidation = require("../validation/userRequest");
const loginValidation = require("../validation/loginRequest");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../jwt/auth");

const createUser = async (req, res) => {
  const { body } = req;

  const { error } = userValidation.validate(body);

  if (!error) {
    const user = {
      firstName: body.firstName,
      lastName: body.lastName,
      password: bcrypt.hashSync(body.password, 10),
      email: body.email,
      gender: body.gender,
      age: body.age,
    };

    const emailIsExist = User.findOne({
      email: user.email,
    });

    if (!emailIsExist) {
      res.status(500).json({
        message: "Email is already existed!",
      });
    } else {
      const result = await User.create(user);
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(500).json({
          message: "Error!!!",
        });
      }
    }
  } else {
    const err = error.details[0].message;

    res.status(200).json({ message: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = await loginValidation.validate({
    email: email,
    password: password,
  });
  if (!error) {
    const user = await User.findOne({
      email: email,
    });

    const isCorrect = await bcrypt.compareSync(password, user.password);
    if (user && isCorrect) {
      const token = generateToken(user.email);
      res
        .status(200)
        .json({ message: "Login Successully!", access_token: token });
    } else {
      res.status(400).json({
        message: "Email or password does not matched!!",
      });
    }
  } else {
    return res.status(400).json({
      message: error,
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
      email: req.params.email,
    },
  });

  if (!user) {
    return res.status(500).json({
      message: "Error!!!",
    });
  } else {
    res.status(200).json(user);
  }
};

module.exports = {
  createUser,
  getAllUser,
  getSingleUser,
  login,
};
