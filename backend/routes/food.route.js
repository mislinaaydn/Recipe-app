const {
  createFood,
  deleteFood,
  categoryFood,
  getSingleFood,
  getAllFood,
} = require("../controllers/food.controller.js");

const multer = require("multer");
const express = require("express");
const router = express.Router();
const upload = multer(); // Multer konfigürasyon

router.post("/food/createFood", createFood);

// Delete Food Route
router.delete("/deleteFood/:id", deleteFood);

// Get Food by Category Route
router.get("/categoryFood/:category", categoryFood);

// Get Single Food Route
router.get("/getSingleFood/:id", getSingleFood);

// Get All Foods Route
router.get("/getAllFood", getAllFood);

module.exports = router;
