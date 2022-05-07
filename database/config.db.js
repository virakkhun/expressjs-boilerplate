const { Sequelize } = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected");
  } catch (error) {
    console.log("Connection denied: " + error);
  }
};

module.exports = connect;
