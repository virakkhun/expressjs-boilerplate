const { DataTypes } = require("sequelize");

const PostSchema = {
  title: {
    type: DataTypes.STRING,
  },
  hastag: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.STRING,
  },
};

module.exports = PostSchema;
