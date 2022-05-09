const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

// you are going to remove this later.
router.post("/:person", UserController.createUser);
router.get("/", UserController.getAllUser);
router.get("/:firstName", UserController.getSingleUser);

module.exports = router;
