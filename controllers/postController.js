const Post = require("../models/Post");

const createPost = async (req, res) => {
  const { title, hastag, desc, UserId } = req.body;

  const post = await Post.create({
    title: title,
    hastag: hastag,
    desc: desc,
    UserId: UserId,
  });

  if (post)
    res.status(201).json({
      data: post,
    });
};

const getAllPost = async (req, res) => {
  const allPost = await Post.findAll();

  res.status(200).json({
    data: allPost,
  });
};

module.exports = {
  createPost,
  getAllPost,
};
