const express = require("express");
const {
  createPost,
  getAllPost,
  likePost,
  uploadImage,
} = require("../controllers/postController");
const { verifyToken } = require("../jwt/auth");
const upload = require("../middleware/fileUploadMiddleWare");
const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/allposts", verifyToken, getAllPost);
router.post("/like", verifyToken, likePost);
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
