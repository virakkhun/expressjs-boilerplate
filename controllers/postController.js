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
    return res.status(201).json({
      data: post,
    });
};

const getAllPost = async (req, res) => {
  const allPost = await Post.findAll();

  return res.status(200).json({
    data: allPost,
  });
};

const likePost = async (req, res) => {
  const { newLike, postId } = req.body;

  const post = await Post.findOne({
    where: {
      id: postId,
    },
  });

  const { like } = post;
  const updateLike = newLike + like;

  const updatedLike = await Post.update(
    {
      like: updateLike,
    },
    {
      where: {
        id: postId,
      },
    }
  );

  return res.status(201).json({
    message: "Like successfully",
    data: like + updatedLike[0],
  });
};

const uploadImage = async (req, res) => {
  const fileName = Date.now() + req.file.originalname;
  const { postId } = req.body;

  const post = await Post.update(
    {
      images: fileName,
    },
    {
      where: {
        id: postId,
      },
    }
  );

  if (post) {
    return res.status(201).json({
      code: 201,
      message: "Post image uploaded successfully",
      data: post,
    });
  }
};

module.exports = {
  createPost,
  getAllPost,
  likePost,
  uploadImage,
};
