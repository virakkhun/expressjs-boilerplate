const express = require("express");
const router = express.Router();

// you are going to remove this later.
router.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = router;
