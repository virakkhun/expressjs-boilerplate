const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/config.db");
const bodyParser = require("body-parser");

const _userRoute = require("./routes/userRoute");
const _postRoute = require("./routes/postRoute");

const corsOptions = {
  origin: process.env.CORS_URL,
};

db.connect();
db.sequelize.sync();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", _userRoute);
app.use("/post", _postRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
