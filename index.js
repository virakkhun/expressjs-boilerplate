const express = require("express");
const app = express();
const cors = require("cors");
const connections = require("./database/config.db");
let corsOptions = {
  origin: "http://localhost:3001",
};
connections(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
