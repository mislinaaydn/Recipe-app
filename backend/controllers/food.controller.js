const Food = require("../models/food.model.js");

const createFood = async (req, res, next) => {
  try {
    const existingFood = await Food.findOne({ foodName: req.body.foodName });

    if (existingFood) {
      return res
        .status(400)
        .json({ message: "Bu isimde zaten bir yemek var." }); // Aynı isme sahip yemek var
    }
    console.log(req.body);

    const newFood = {
      foodName: req.body.foodName,
      author: req.body.author,
      category: req.body.category,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      description: req.body.description,
      comments: req.body.comments,
      image: req.body.imageUrl,
      preparationTime: req.body.preparationTime,
      cookingTime: req.body.cookingTime,
      servings: req.body.servings,
    };

    const food = await Food.create(newFood);
    res.status(201).json(food);
  } catch (error) {
    if (error.code === 11000) {
      // MongoDB benzersizlik hatası kodu

      return res
        .status(400)
        .json({ message: "Bu isimde zaten bir yemek var." });
    }
    res.status(500).json({ message: error.message });
  }
};

const deleteFood = async (req, res, next) => {
  try {
    const { id } = req.params; // req.params'dan id'yi alıyoruz

    const deletedFood = await Food.findByIdAndDelete(id); // Yemek siliniyor

    if (!deletedFood) {
      return res.status(404).json({ message: "Yemek bulunamadı" }); // Eğer yemek bulunamazsa
    }

    res.status(200).json({ message: "Yemek başarıyla silindi" });
  } catch (error) {
    res.status(500).json({ message: "Yemek silinemedi", error: error.message });
  }
};
const categoryFood = async (req, res, next) => {
  try {
    const category = req.params.category;
    const foods = await Food.find({ category: category });

    if (foods.length === 0) {
      return res
        .status(404)
        .json({ message: "Bu kategoriye ait yemek bulunamadı" });
    }

    res.status(200).json(foods);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Kategoriler listelenemedi", error: error.message });
  }
};

const getSingleFood = async (req, res, next) => {
  try {
    const { id } = req.params; // URL parametrelerinden id'yi al
    const food = await Food.findById(id); // id'yi kullanarak veri tabanında ara

    if (!food) {
      return res.status(404).json({ message: "Yemek bulunamadı" });
    }

    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllFood = async (req, res, next) => {
  try {
    const food = await Food.find();
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createFood,
  deleteFood,
  categoryFood,
  getSingleFood,
  getAllFood,
};
