const express = require("express");
const app = express();
const cors = require("cors");
const connections = require("./database/config.db");

const helloRoute = require("./routes/helloRoute");

const corsOptions = {
  origin: process.env.CORS_URL,
};

connections(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/hello", helloRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
