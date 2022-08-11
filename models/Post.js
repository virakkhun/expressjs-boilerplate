const { sequelize } = require("../database/config.db");
const PostSchema = require("../shcema/postSchema");

const Post = sequelize.define("post", PostSchema);

module.exports = Post;
