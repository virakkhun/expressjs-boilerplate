const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

// you are going to remove this later.
router.get("/", UserController.get);

module.exports = router;
