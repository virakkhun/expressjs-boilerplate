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
  images: {
    type: DataTypes.STRING,
  },
  like: {
    type: DataTypes.INTEGER,
  },
};

module.exports = PostSchema;
