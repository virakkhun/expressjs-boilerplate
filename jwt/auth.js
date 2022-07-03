const jwt = require("jsonwebtoken");
require("dotenv/config");

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.AUTH_SECRET, { expiresIn: "60s" });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.AUTH_SECRET, (err, email) => {
    if (err) return res.sendStatus(403);

    req.email = email;

    next();
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
