const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config.db");

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
