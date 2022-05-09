const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/config.db");

const helloRoute = require("./routes/userRoute");

const corsOptions = {
  origin: process.env.CORS_URL,
};

db.connect(cors(corsOptions));
db.sequelize.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", helloRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
