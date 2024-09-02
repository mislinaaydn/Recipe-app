const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: false,
  },
  instructions: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  comments: {
    type: [Object],
    required: false,
  },
  image: {
    type: [String],
    required: false,
  },
  preparationTime: {
    type: String,
    required: false,
  },
  cookingTime: {
    type: String,
    required: false,
  },
  servings: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Food", foodSchema);
