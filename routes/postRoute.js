const express = require("express");
const { createPost, getAllPost } = require("../controllers/postController");
const { verifyToken } = require("../jwt/auth");
const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/allposts", verifyToken, getAllPost);

module.exports = router;
