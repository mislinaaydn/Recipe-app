const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db.js");
const foodRoutes = require("./routes/food.route.js");
const userRoutes = require("./routes/user.route.js");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use("/", foodRoutes);
app.use("/user", userRoutes);
app.use("/food", foodRoutes);

db();
const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
