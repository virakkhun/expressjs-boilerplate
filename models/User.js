const { sequelize } = require("../database/config.db");
const userSchema = require("../shcema/userShcema");
const Post = require("./Post");

const User = sequelize.define("User", userSchema);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;
