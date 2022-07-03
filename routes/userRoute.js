const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
const { verifyToken } = require("../jwt/auth");
// you are going to remove this later.
router.post("/", UserController.createUser);
router.post("/login", UserController.login);
router.get("/", verifyToken, UserController.getAllUser);
router.get("/:email", verifyToken, UserController.getSingleUser);

module.exports = router;
