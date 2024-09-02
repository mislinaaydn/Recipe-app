const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect("mongodb://localhost:27017/recipe")
    .then(() => {
      console.log("Connected to Mongo");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
