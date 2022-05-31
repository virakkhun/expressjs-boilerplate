const { sequelize } = require("../database/config.db");
const userSchema = require("../shcema/userShcema");

const User = sequelize.define("User", userSchema);

module.exports = User;
